'use strict';

var response = require('./res');
var conn = require('./connection');

exports.index = function(req, res){
    response.ok("Welcome", res);
};

//post data
exports.postUser = function(req, res){
    var dataInput = {
        email : req.body.email,
        password : req.body.password,
        nama : req.body.nama
    };
    
    var send = conn.collection("userData").add(dataInput);
    res.send({status : "berhasil"});
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