module.exports = {
  init: (controller) => {
    controller.hears([/I want pizza/], ['direct_message', 'direct_mention'], (bot, message) => {
      bot.reply(message, `I can order you some.`)
    })
  },
  help: {
    command: 'order',
    text: `Say "I want pizza" and I'll give ya some`
  }
}
