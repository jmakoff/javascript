/*###Задача 2
 Добавьте в код предыдущей задачи код, отправляющий POST запрос по пути '/test'. Тело запроса - произвольный текст. Ответ сервера должен быть в формате JSON в следующем виде: '{"message": "ТЕКСТ ТЕЛА ЗАПРОСА"}'.
 */
var http = require('http');
var fs = require('fs');
const url = require('url');

const port = process.env.port || 1337;
var count = 0;

const server = http.createServer(function (req, res) {

    count+=1;
    if (req.url = '/test'){
        req.on('data', function (data) {


            var post = data.toString()
            // создание тела ответа
            console.log(`BODY: ${post}`);
            fs.writeFile(`${count} File`, `message:${post} `)
            console.log('file created')

        });

           }
        res.end('MyServer')

    /*
     res.end('You`ve just create new file') при добавлении этого кода созадется два файла вместого одного
     */
}).listen(port, function () {
    console.log('Server started on '+ port)


// Создание POST запроса
// данные для передачи с POST запросом
var postData = 'This is sample POST data!';

// Параметры создаваемого запроса
var options = {
    host: 'localhost',
    path:'/test',
    port: port,
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' }

};


// сделать запрос на сервер
var req = http.request(options, (res) => {

    console.log(`STATUS: ${res.statusCode}`);
    console.log(`HEADERS: ${JSON.stringify(res.headers)}`);

    res.setEncoding('utf8');

        res.on('end', () => {
        console.log('No more data in response.');
    });

});
    req.write(postData)
    req.end();

})