/*
 ###Задача 3
 Модифицируйте код предыдущей задачи. Реализуйте следующее:
 * При PUT-запросе по пути '/users/index', где index - индекс элемента в массиве users, элемент по указанному индексу заменяется на следующий объект: {name: 'updated name', age: 'updated age'}.
  * При DELETE-запросе по пути '/users/index', где index - индекс элемента в массиве users, происходит удаление элемента с указанным индексом из массива. */
var restify = require('restify'),
    fs = require('fs');
var bodyParser = require('body-parser');


var port = process.env.port || 1337;

// модуль для обработки запросов
var apiHandler = require('./api/api3');

// создание сервера
var server = restify.createServer({
    name: 'myApp'
});

server.use(bodyParser.urlencoded({extended: true}))
server.get('/users', apiHandler.get)
server.post('/users', apiHandler.post)
server.put('/users/:index', apiHandler.put )
server.del('/users/:index', apiHandler.delete )

server.listen(port, console.log('app listening '+ port));

