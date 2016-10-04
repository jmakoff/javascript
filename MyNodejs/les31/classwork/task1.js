/*###Задача 1
 Создайте подключение к базе данных test(файл с базой данных находится в папке  test_db).
 */
var express  = require('express');
var app = express();

var port = process.env.port || 1337;

var mysql = require('mysql');
// параметры соединеня с бд
var connection = mysql.createConnection({
    host: 'localhost', // имя хоста базы данных
    user: 'root', // MySQL пользователь, под именем которого авторизоваться
    password: '3215232152', // пароль пользователя MySQL
    database: 'test', // имя базы данных
    port: 3306 // порт, на котором установлен MySQL сервер
});
app.use(function(req, res) {

    if (req.url == '/') {

        // подключение к базе данных
        connection.connect(function(err) {

            if (err) console.log(err.stack);

            console.log('connected as id ' + connection.threadId);
        });

        // запрос к базе данных
        connection.query('SELECT * FROM `test_table` ', function(err, rows) {

            if (err) console.log(err.stack);

            res.send('Connected to database')
            res.status(200)

            console.log('query to database successful');
        });

        res.on('finish', function() {

            // отключение от базы данных
            connection.end(function(err) {

                if (err) console.log(err.stack);

                console.log('disconnected from database');
            });

        })

    }
});
app.listen(port, function() {

    console.log('app listening on port ' + port);

});
