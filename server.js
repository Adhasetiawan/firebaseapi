const express = require ('express');
const bodyParser = require ("body-parser");
var cors = require("cors")
const app = express();

var morgan = require('morgan');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));

var routes = require('./router');
routes(app);

app.listen(3500, ()=>{
    console.log('Server is currently working');
})