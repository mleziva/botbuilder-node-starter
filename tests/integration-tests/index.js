var common = require('./common.js');
var RESPONSES = require('./flows/basic.js');
var assert = require('assert');
var testBot = require('../../bot.js');
var builder = require('botbuilder');


//Our parent block
describe('Bot Tests', () => {
    describe('Get Schwifty', function () {
        it('should give get Schwifty reply', function (done) {
            this.timeout(5000);
            var connector = new builder.ConsoleConnector();
            var bot = testBot.create(connector);
            common.testBot(bot, RESPONSES.good, function (success) {
                assert.equal(success, true);
                done();
            });
        });
    });
});
