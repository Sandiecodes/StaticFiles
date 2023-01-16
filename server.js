'use strict';
// load package
const express = require('express');
const bodyParser = require("body-parser");
const fs = require('fs')

const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Greetings
app.post('/greeting', (req,res) => {
var first_name = req.body.fname;
res.send('hello ' + first_name);
});

//Write to File
app.post('/save', (req,res) => {
var filename = req.body.filename;
var data = req.body.data;
fs.writeFile('pages/' + filename, data, { flag: 'a+' }, err => {
if (err) {
console.error(err)
return
}
res.send("ok");
});
});
app.use('/', express.static('pages'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);