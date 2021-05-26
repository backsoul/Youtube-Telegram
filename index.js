const { Telegraf } = require("telegraf");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) =>
  ctx.reply(
    `Welcome ${ctx.message.from.first_name} ${ctx.message.from.last_name}`
  )
);

bot.help((ctx) => ctx.reply("Send me a sticker"));

bot.settings((ctx) => {
  ctx.reply("settings");
});

bot.hears("yt", (ctx) => {
  ctx.reply("Hey i am selling yt");
});

/* bot.on("text", (ctx) => {
  ctx.reply(`${ctx.message.text}`);
}); */

bot.command("custom", (ctx) => ctx.reply("Custom!!"));

bot.command("quit", (ctx) => {
  ctx.reply(
    `goodbay user: ${ctx.message.from.first_name} ${ctx.message.from.last_name}`
  );

  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);

  // Using context shortcut
  ctx.leaveChat();
});
bot.launch();
