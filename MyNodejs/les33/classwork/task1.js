/*###Задача 1
 Создайте базовый сервер с помощью Restify. Реализуйте следующее:
 * При GET-запросе по пути '/test' на странице отображаются заголовки запроса.
 * При POST-запросе по пути '/test' на странице отображается тело запроса.
 */
var restify = require('restify'),
    fs = require('fs');
var bodyParser = require('body-parser');


var port = process.env.port || 1337;

// модуль для обработки запросов
var apiHandler = require('./api/api1');
// создание сервера
var server = restify.createServer({
    name: 'myApp'
});

server.use(bodyParser.urlencoded({extended: true}));

server.get('/test', apiHandler.ShowHeaders)
server.post('/test', apiHandler.ShowBody)
server.listen(port, console.log('app listening '+ port))
