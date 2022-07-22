
var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const connect = admin.firestore();

module.exports = connect;