function testBot(bot, messages, done) {
  var connector = bot.connector();

  var step = 0;
  bot.on('send', function (message) {
    console.log("step: " + step);
    console.log("sent: " + messages[step - 1].sent);
    console.log("reply: " + message.text);
    //check message timestamp
    var responses = messages[step - 1].reply;
    if (!responses.includes(message.text)) {
      return done(false);
    }
    if (step == messages.length) {
      return done(true);
    }
    //if there is a sent, send, else don't
    if (messages[step].sent) {
      connector.processMessage(messages[step].sent);
    }
    step++;
  });
  if (step == 0) {
    connector.processMessage(messages[step].sent);
    step++;
  }
}

module.exports = {
  testBot
};