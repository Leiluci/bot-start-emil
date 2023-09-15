const { Telegraf, Markup } = require('telegraf');

const bot_token = 'bot-token';
const bot = new Telegraf(bot_token);


bot.start((ctx) => {
    const user = ctx.message.from;
    const username = user.username;
    const firstName = user.first_name;
    const userId = user.id;
    ctx.telegram.sendMessage(-4000195691, 
        `Kullanıcı Adı: @${username}\nAdı: ${firstName}\nID: ${userId}`, 
        Markup.inlineKeyboard([
            Markup.button.callback('Leyla', String(userId))
        ]).resize()
    );
});

bot.action(/^[0-9]+$/, (ctx) => {
    const userId = ctx.match[0];
    bot.telegram.sendMessage(userId, 'leyla');
    ctx.answerCbQuery('Göndərdim.');
});
/*bot.command('emil', (ctx) => {
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
*/

bot.launch();
