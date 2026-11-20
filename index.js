const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'PikiBlainders.aternos.me',
  port: 13323,
  username: 'PikiAFK',
  version: false
});

bot.on('login', () => {
  console.log('Bot entrou no servidor!');
});

bot.on('end', () => {
  console.log('Bot desconectado.');
});

bot.on('error', console.log);