/*###Задача 1
 Создайте HTTP сервер, который выводит в консоль HTTP метод запросв и путь, по которому был сделан запрос.
 */
const http = require('http');
const port = process.env.port || 1337;
const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    console.log(` ${req.method} ${req.url} `);
    res.end('<h1> My Classwork 29.1</h1>')
})

server.listen(port)
console.log("server on port " + (port))