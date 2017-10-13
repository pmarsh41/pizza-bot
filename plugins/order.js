module.exports = {
  order: (controller) => {
    controller.hears([/I want pizza/], ['direct_message', 'direct_mention'], (bot, message) => {
      bot.reply(message, `Cool! What kind of a pizza do you want?`)
    })
  }
}