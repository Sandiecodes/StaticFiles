'use strict';
// load package
const express = require('express');
const PORT = 8080;
const HOST = '0.0.0.0';
const app = express();

app.get('/greeting', (req,res) => {
var first_name = req.query.fname;
res.send('hello '  + first_name);
});
app.use('/', express.static('pages'));
app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);