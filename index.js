const TelegramBot = require("node-telegram-bot-api");

const token = process.env.BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

const adminId = process.env.ADMIN_CHAT_ID;

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "سلام 👋 خوش آمدی به ربات VPN");
});

bot.onText(/\/plan/, (msg) => {
  bot.sendMessage(msg.chat.id, "پلن‌ها:\n1 ماهه\n3 ماهه\n6 ماهه");
});

bot.on("message", (msg) => {
  if (msg.text && !msg.text.startsWith("/")) {
    if (adminId) {
      bot.forwardMessage(adminId, msg.chat.id, msg.message_id);
    }
    bot.sendMessage(msg.chat.id, "پیام دریافت شد ✔");
  }
});

console.log("Bot running...");
