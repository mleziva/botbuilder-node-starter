const RESPONSES = require('../../../responses/basic.json');

module.exports = {
  good: [
    {
      sent: "show me what you got",
      reply: "SHOW ME WHAT YOU GOT (1. Get Schwifty or 2. Launch the nukes)"
    },
    {
      sent: "get schwifty",
      reply: RESPONSES['schwifty']
    }
  ]
};