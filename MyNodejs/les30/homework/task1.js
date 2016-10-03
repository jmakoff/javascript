var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');

var port = process.env.port || 1337;
app.use(function (req, res) {
    res.send('hello!');
})
