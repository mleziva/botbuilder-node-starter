require('dotenv').config();
const bot = require('./bot.js'),
    builder = require('botbuilder'),
    restify = require('restify');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});
  
// Create chat bot
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID ? process.env.MICROSOFT_APP_ID : '',
    appPassword: process.env.MICROSOFT_APP_PASSWORD ? process.env.MICROSOFT_APP_PASSWORD : '',
        gzipData: true
    });
bot.create(connector);

// Listen for messages from users
server.post('/api/messages', connector.listen());

// **Server Stuff** Tell the load balancer that this is healthy
server.get('/', function(req, res, next) {
    res.send(200);
});

