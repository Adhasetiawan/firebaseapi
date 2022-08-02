'use strict';

module.exports = function(app){
    var myJson = require('./controller');

    app.route('/')
        .get(myJson.index);

    app.route('/register')
        .post(myJson.Register);

    app.route('/getData')
        .get(myJson.getUser);
    
    app.route('/getAllData')
        .get(myJson.getAllUser);
}