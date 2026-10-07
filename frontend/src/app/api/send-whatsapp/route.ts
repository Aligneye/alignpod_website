import { NextRequest, NextResponse } from "next/server";
import { parseIndianPhoneNumber } from "@/utils/phone";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, address, message } = body;

    // Basic input validation
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, phone)" },
        { status: 400 }
      );
    }

    // 1. Check if the recipient is an Indian phone number
    const phoneCheck = parseIndianPhoneNumber(phone);
    if (!phoneCheck.isIndian || !phoneCheck.whatsappRecipient) {
      console.info(
        `[WhatsApp Automation] Skipped number '${phone}' - not an Indian mobile number.`
      );
      return NextResponse.json({
        success: true,
        skipped: true,
        message: "Non-Indian number: WhatsApp notification skipped as requested.",
      });
    }

    // 2. Compose full custom WhatsApp message (including Delivery Address and Note)
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanAddress = address ? String(address).trim() : "";

    const whatsappBody =
      `Hi ${cleanName}! 👋\n\n` +
      `Thank you for connecting with AlignEye. We have received your order / inquiry.\n\n` +
      `📋 *Order & Delivery Details:*\n` +
      `• *Name:* ${cleanName}\n` +
      `• *Email:* ${cleanEmail}\n` +
      (cleanAddress ? `• *Delivery Address:* ${cleanAddress}\n` : "") +
      (message ? `• *Note:* ${String(message).trim()}\n\n` : `\n`) +
      `Our team will process your request and reach out to you shortly.\n\n` +
      `Best regards,\n` +
      `*Team AlignEye*\n` +
      `https://aligneye.com`;

    // 3. Try sending via local Baileys microservice gateway first (Option 1)
    const gatewayUrl = process.env.WHATSAPP_GATEWAY_URL || "http://localhost:8080/send";
    try {
      const gatewayResponse = await fetch(gatewayUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone: phoneCheck.formatted10Digit,
          message: whatsappBody,
        }),
        signal: AbortSignal.timeout(6000), // 6 second timeout
      });

      if (gatewayResponse.ok) {
        const gwData = await gatewayResponse.json();
        console.info(
          `[WhatsApp Automation] Sent via Baileys Gateway to ${phoneCheck.whatsappRecipient}:`,
          gwData
        );
        return NextResponse.json({
          success: true,
          via: "baileys",
          messageId: gwData.messageId,
          recipient: phoneCheck.whatsappRecipient,
        });
      } else {
        const gwErr = await gatewayResponse.text();
        console.warn(`[WhatsApp Automation] Baileys Gateway responded with error: ${gwErr}. Checking fallback...`);
      }
    } catch (gwErr: any) {
      console.warn(
        `[WhatsApp Automation] Baileys Gateway not reachable at ${gatewayUrl} (${gwErr.message}). Checking Twilio fallback...`
      );
    }

    // 4. Fallback to Twilio REST API if configured
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber =
      process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886";

    if (!accountSid || !authToken) {
      return NextResponse.json(
        {
          error:
            "WhatsApp gateway is offline and Twilio credentials are not configured.",
        },
        { status: 503 }
      );
    }

    const twilioEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const authHeader = `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`;
    const contentSid = process.env.TWILIO_CONTENT_SID;

    const params = new URLSearchParams();
    params.append("From", fromNumber.startsWith("whatsapp:") ? fromNumber : `whatsapp:${fromNumber}`);
    params.append("To", phoneCheck.whatsappRecipient);

    if (contentSid) {
      params.append("ContentSid", contentSid);
      params.append(
        "ContentVariables",
        JSON.stringify({
          "1": cleanName,
          "2": cleanEmail,
          "3": cleanAddress || "Provided on file",
        })
      );
    } else {
      params.append("Body", whatsappBody);
    }

    const response = await fetch(twilioEndpoint, {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("[WhatsApp Automation] Twilio error response:", data);
      return NextResponse.json(
        {
          error: data.message || "Failed to send WhatsApp message via Twilio",
          twilioCode: data.code,
        },
        { status: response.status }
      );
    }

    console.info(
      `[WhatsApp Automation] Message sent successfully via Twilio to ${phoneCheck.whatsappRecipient} (SID: ${data.sid})`
    );

    return NextResponse.json({
      success: true,
      via: "twilio",
      messageSid: data.sid,
      recipient: phoneCheck.whatsappRecipient,
      status: data.status,
    });
  } catch (error: any) {
    console.error("[WhatsApp Automation] Unexpected server error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
