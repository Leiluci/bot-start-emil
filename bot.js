const { Telegraf, Markup } = require('telegraf');

const bot_token = 'bot_token';
const bot = new Telegraf(bot_token);


bot.start((ctx) => {
    ctx.reply('working');
});
bot.command('emil', (ctx) => {
    if (ctx.chat.type !== 'private') {
        ctx.reply ('yes');
    }
    else {
        ctx.reply ('abc');
    }
});
bot.command('leyla', (ctx) => {
    ctx.reply('leyla', Markup.inlineKeyboard([

        [Markup.button.url('Go to instagram','https://instagram.com/thisisenn_?igshid=MzRlODBiNWFlZA=='),
        Markup.button.url('Go to telegram','https://t.me/Thisisenn')],
        [Markup.button.callback('Close', 'CLOSE')]


    ]).resize());
});
bot.action('CLOSE', (ctx) => {
    ctx.deleteMessage();
});


bot.launch();
