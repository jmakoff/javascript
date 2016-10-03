/*###Задача 1
 Создайте HTTP сервер, который записывает заголовки каждого запроса в отдельный файл.
  При обработке каждого запроса должен создаваться отдельный файл,
  имя которого - номер запроса(1 - для первого запроса, 2 - для второго и т.д.).
 */
var http = require('http');
var fs = require('fs');
const port = process.env.port || 1337;
var count = 0;

const server = http.createServer(function (req, resp) {
    count+=1;
    fs.writeFile(`${count}`, `${req.rawHeaders}`)
    console.log('file created')
/*
    resp.end('You`ve just create new file') при добавлении этого кода созадется два файла вместого одного
*/
}).listen(port, function () {
    console.log('Server started on '+ port)
})
