/*
 ###Задача 2
 Дано массив users:
 ```
 users = [
 { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
 { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
 ]
 ```
 Реализуйте следующее:
 * При GET-запросе по пути '/users' в ответе сервера отправляется массив users в формате JSON.
 * При POST-запросе по пути '/users' в массив users добавляется элемент {name: 'random user', age: 30}.
 */
var restify = require('restify'),
    fs = require('fs');
var bodyParser = require('body-parser');


var port = process.env.port || 1337;

// модуль для обработки запросов
var apiHandler = require('./api/api2');

// создание сервера
var server = restify.createServer({
    name: 'myApp'
});

server.use(bodyParser.urlencoded({extended: true}))
server.get('/users', apiHandler.get)
server.post('/users', apiHandler.post)
server.listen(port, console.log('app listening '+ port));

