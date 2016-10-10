/*
 ###Задача 1
 Создайте файловый сервер с помощью Express, который будет обслужипвать директорию 'public'.
 */
var express = require('express');
var app = express();
var port = process.env.port || 1337;

app.use(express.static('./public'));

app.listen(port, function () {
    console.log('App listening on port ' + port);
});