const express = require("express");
const pino = require("pino");
const qrcode = require("qrcode-terminal");
const path = require("path");
const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
} = require("@whiskeysockets/baileys");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const AUTH_DIR = path.join(__dirname, "auth_info_baileys");

let sock = null;
let isConnected = false;

// Human typing / pacing delay helper
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function startWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState(AUTH_DIR);
  const { version, isLatest } = await fetchLatestBaileysVersion().catch(() => ({
    version: undefined,
    isLatest: false,
  }));

  console.log(`[WhatsApp Gateway] Starting Baileys (WA version: ${version?.join(".") || "default"}, isLatest: ${isLatest})`);

  sock = makeWASocket({
    version,
    auth: state,
    logger: pino({ level: "silent" }), // Hide verbose protocol logs
    printQRInTerminal: false,
    syncFullHistory: false,
  });

  sock.ev.on("creds.update", saveCreds);

  sock.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect, qr } = update;

    if (qr) {
      console.log("\n=======================================================");
      console.log("📲 SCAN THIS QR CODE WITH WHATSAPP (Linked Devices):");
      console.log("=======================================================\n");
      qrcode.generate(qr, { small: true });
      console.log("\nWaiting for scan in WhatsApp...\n");
    }

    if (connection === "close") {
      isConnected = false;
      const statusCode = lastDisconnect?.error?.output?.statusCode;
      const shouldReconnect = statusCode !== DisconnectReason.loggedOut;

      console.warn(
        `[WhatsApp Gateway] Connection closed. Reason: ${statusCode || "unknown"}. Reconnecting: ${shouldReconnect}`
      );

      if (shouldReconnect) {
        setTimeout(startWhatsApp, 3000);
      } else {
        console.error(
          "[WhatsApp Gateway] Device logged out. Delete 'auth_info_baileys' folder and restart to generate new QR."
        );
      }
    } else if (connection === "open") {
      isConnected = true;
      console.log("\n=======================================================");
      console.log("✅ WHATSAPP CONNECTED & READY!");
      console.log(`🚀 Gateway API running at http://localhost:${PORT}`);
      console.log("=======================================================\n");
    }
  });
}

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({
    status: isConnected ? "connected" : "disconnected",
    service: "AlignEye Baileys WhatsApp Gateway",
  });
});

// Send WhatsApp message endpoint
app.post("/send", async (req, res) => {
  try {
    const { phone, message } = req.body;

    if (!phone || !message) {
      return res.status(400).json({ error: "Missing required fields: phone, message" });
    }

    if (!isConnected || !sock) {
      return res.status(503).json({
        error: "WhatsApp is not connected yet. Please scan the QR code in the terminal.",
      });
    }

    // Clean phone number (e.g. 9815310246 -> 919815310246@s.whatsapp.net)
    let cleanPhone = String(phone).replace(/\D/g, "");
    if (cleanPhone.length === 10) {
      cleanPhone = "91" + cleanPhone;
    } else if (cleanPhone.length === 11 && cleanPhone.startsWith("0")) {
      cleanPhone = "91" + cleanPhone.slice(1);
    }

    const jid = `${cleanPhone}@s.whatsapp.net`;

    // Anti-ban safety: Add a human-like delay (1.5s to 2.5s)
    const randomDelay = Math.floor(Math.random() * 1000) + 1500;
    await delay(randomDelay);

    // Send text message
    const result = await sock.sendMessage(jid, { text: message });

    console.log(`[WhatsApp Gateway] Message sent successfully to ${jid} (ID: ${result?.key?.id})`);

    res.json({
      success: true,
      recipient: jid,
      messageId: result?.key?.id,
    });
  } catch (error) {
    console.error("[WhatsApp Gateway] Error sending message:", error);
    res.status(500).json({
      error: error?.message || "Failed to send WhatsApp message",
    });
  }
});

// Start Express server and initialize WhatsApp
app.listen(PORT, () => {
  console.log(`[WhatsApp Gateway] HTTP Server listening on http://localhost:${PORT}`);
  startWhatsApp();
});
