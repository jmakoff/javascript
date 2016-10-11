var express  = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 1337;
var bodyParser = require('body-parser');

var mysql = require('mysql');
var jsonParser = bodyParser.json();
var textParser = bodyParser.text();

app.use(jsonParser);
app.use(textParser);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('pages'));

app.get('/', function(req, res){
    res.redirect('/home');
})
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "pages/home.html"))
})
app.post('/login', function (req, res) {
if (req.body.login==="admin" && req.body.password =='12345'){
    res.send('You`ve been successfully authorised as '+ req.body.login)
}
else {
    res.send('Authorisation problem!')
}

})

app.listen(port, function () {
    console.log('server listening on '+ port+ ' port')
})