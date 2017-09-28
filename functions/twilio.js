const twilio = require('twilio');

const accountSid = require('./accountSid.js');
const authToken = require('./authToken.js');

module.exports = new twilio.Twilio(accountSid, authToken);
