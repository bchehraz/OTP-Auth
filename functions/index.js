const admin = require('firebase-admin'); //access to database sits here
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');

//request = input data
//response = output data or data we want to respond to the user with or whoever made the request

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://one-time-password-84a07.firebaseio.com"
})

exports.createUser = functions.https.onRequest(createUser);


// twilio phone # =  559-785-2174
