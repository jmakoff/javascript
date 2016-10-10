var express  = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 1337;

var mysql = require('mysql');
app.get('/', function(req, res){
    res.redirect('/home');
})
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "pages/home.html"))
})

app.listen(port, function () {
    console.log('server listening on '+ port+ ' port')
})