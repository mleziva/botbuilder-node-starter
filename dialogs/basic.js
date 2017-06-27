const RESPONSES = require('../responses/basic.json');

exports.dialog = [
    (session, args, next) => {
        //sending typing will cause the integration tests to fail
        //session.sendTyping();
        //session.delay(2000)
        builder.Prompts.choice(session, RESPONSES['prompt'], RESPONSES['prompt.choices']);
    },
    function (session, results) {
        //session.sendTyping();
        //session.delay(2000)
        console.log("entity " + JSON.stringify(results.response));
        console.log("index " + JSON.stringify(results.response.index));
        
        if (results.response && results.response.entity) {
            var selection = results.response.index;
            // route to corresponding dialogs
            switch (selection) {
                case 0:
                    session.endDialog(RESPONSES['schwifty']);
                    break;
                case 1:
                    session.endDialog(RESPONSES['nukes']);
                    break;
                default:
                    session.reset('/');
                    break;
            }
        }
        else {
            session.reset('/');
        }
    }
]