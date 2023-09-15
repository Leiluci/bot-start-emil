const { Telegraf, Markup } = require('telegraf');

const bot_token = '6361472278:AAHfkW9_qwMgJymmbZupdvYXV6e_ik4KLVI';
const bot = new Telegraf(bot_token);


bot.start((ctx) => {
    const user = ctx.message.from;
  const username = user.username;
  const firstName = user.first_name;
  
  ctx.telegram.sendMessage(-4000195691, `Kullanıcı Adı: @${username}\nAdı: ${firstName}`);
});

/*bot.command('emil', (ctx) => {
    if (ctx.chat.type !== 'private') {
        ctx.reply ('yes');
    }
    else {
        ctx.reply ('abc');
    }
});*/
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
