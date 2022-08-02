'use strict';

var response = require('./res');
var conn = require('./connection');

exports.index = function(req, res){
    response.ok("Welcome", res);
};

//Register
exports.Register = function(req, res){
    var dataInput = {
        email : req.body.email,
        password : req.body.password,
        nama : req.body.nama,
        token : req.body.token
    };

    conn.collection('userData').where('email', '==', dataInput.email).get().then((doc)=> {
        const items = doc.docs.map(item => item.data());
        if(items.length != 0){
            res.send({Status : "400", Msg : "Email already use"})
        }else{
            var send = conn.collection("users").add(dataInput);
            res.send({Status : "200", Msg : "Welcome"})
        }
    })
}

//getAll data
exports.getUser = function(req, res){
    conn.collection('userData').get().then((doc)=> {
        const items = doc.docs.map(item => item.data());
        res.send({allItem : items});
    })
}

//get Singledata
exports.getAllUser = (req, res) => {
    conn.collection('userData').where('email', '==', 'kobo@gmail.com').get().then((doc)=> {
        const items = doc.docs.map(item => item.data());
        res.send({allItem : items});
    })

}