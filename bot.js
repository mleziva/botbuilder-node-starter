global.builder = require('botbuilder');
const RESPONSES = require('./responses/common.json');
//load in dialogs
var basic = require('./dialogs/basic.js');

function create(connector) {
    const bot = new builder.UniversalBot(connector);
    //creates a luis recognizer for the / dialog
    const intents = new builder.IntentDialog({
        recognizers: [
            //new builder.LuisRecognizer(process.env.LUIS_MODEL_URL)
        ]
    });

    //define reg ex lists here
    var schwiftyKeywords = new RegExp(RESPONSES['schwifty.keywords'], "i");


    //default dialog
    bot.dialog('/', intents
        .onBegin(function (session, args, next) {
            //create session variables new
            session.userData.profile = {};
            session.userData.profile.name = "Friend";
            next();
        })
        .matches(schwiftyKeywords, '/getSchwifty')
        .matches(/help/, '/help')
        .onDefault('/default')
    );
    //called if no intent is detected
    bot.dialog('/default', [
        function (session) {
            session.endDialog(RESPONSES['default'], session.message.text);
        }
    ]);

    bot.dialog('/getSchwifty', basic.dialog);

    bot.dialog('/help', RESPONSES['help']);

    //need to return the bot for testing
    return bot;
}

module.exports = { create }







