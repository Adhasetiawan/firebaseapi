
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

module.exports = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const connect = admin.admin.firestore();

module.exports = connect;