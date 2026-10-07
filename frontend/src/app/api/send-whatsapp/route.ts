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

    // 2. Validate Twilio environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber =
      process.env.TWILIO_WHATSAPP_FROM || "whatsapp:+14155238886";

    if (!accountSid || !authToken) {
      console.error(
        "[WhatsApp Automation] Missing TWILIO_ACCOUNT_SID or TWILIO_AUTH_TOKEN."
      );
      return NextResponse.json(
        {
          error:
            "Twilio credentials are not configured on the server. Please set TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN in environment variables.",
        },
        { status: 500 }
      );
    }

    // 3. Compose WhatsApp message
    const cleanName = String(name).trim();
    const cleanEmail = String(email).trim();
    const cleanAddress = address ? String(address).trim() : "";

    const whatsappBody =
      `Hi ${cleanName}! 👋\n\n` +
      `Thank you for connecting with AlignEye. We have received your order / inquiry.\n\n` +
      `📋 *Order & Delivery Details:*\n` +
      `• Name: ${cleanName}\n` +
      `• Email: ${cleanEmail}\n` +
      (cleanAddress ? `• Delivery Address: ${cleanAddress}\n` : "") +
      (message ? `• Note: ${String(message).trim()}\n\n` : `\n`) +
      `Our team will process your request and reach out to you shortly.\n\n` +
      `Best regards,\n` +
      `*Team AlignEye*\n` +
      `https://aligneye.com`;

    // 4. Send via Twilio REST API
    const twilioEndpoint = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
    const authHeader = `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`;

    const contentSid = process.env.TWILIO_CONTENT_SID;

    const params = new URLSearchParams();
    params.append("From", fromNumber.startsWith("whatsapp:") ? fromNumber : `whatsapp:${fromNumber}`);
    params.append("To", phoneCheck.whatsappRecipient);

    if (contentSid) {
      params.append("ContentSid", contentSid);
      // Passes Name ({{1}}), Email ({{2}}), and Address ({{3}}) to the template variables
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
      `[WhatsApp Automation] Message sent successfully to ${phoneCheck.whatsappRecipient} (Message SID: ${data.sid})`
    );

    return NextResponse.json({
      success: true,
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
