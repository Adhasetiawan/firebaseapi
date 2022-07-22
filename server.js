const express = require ('express');
const bodyParser = require ('body-parser');
var cors = require('cors')
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(3500, ()=>{
    console.log('Server is currently working');
})