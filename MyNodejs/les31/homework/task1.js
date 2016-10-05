/*#Homework
 Для выполнения заданий используйте базу данных test, которая находится в папке test_db рядом с файлом с задачами.
 ###Задача 1
 Создайте подключение к базе данных test через пул соединений.
 При GET-запросе по пути '/' выполните запрос к базе данных для выбора всех элементов таблицы test_table и отобразите ихз в виде таблицы.
 */
var express  = require('express');
var app = express();

var mysql = require('mysql');

var port = process.env.port || 1337;


// соединения могут быть объединены для облегчения их многократного использования
// или использования больщого количесва соединений
var pool = mysql.createPool({
    connectionLimit: 1, // максимальное количество соединений, которые могут быть созданы одновременно
    queueLimit: 10, // максимальное разрешенное количество соединений в очереди обработки
    aquireTimeout: 5000, // максимальное время ожидания при установке соединения
    host: 'localhost',
    user: 'root',
    password: '3215232152',
    database: 'test'
});


app.get('/', function(req, res) {
    // создать соединение
    pool.getConnection(function(err, conn){

        if (err) {
            console.log(err.stack);
            return;
        }

        // использовать соединение
        conn.query('SELECT * FROM `test_table`', function(err, rows, fields) {
            res.write('<table>');

            for (var i = 0; i < rows.length; i++) {
                res.write(`
				<tr>
					<td>${rows[i].id}</td>
					<td>${rows[i].name}</td>
					<td>${rows[i].info}</td>
				</tr>
			`)
            };

            res.write('</table>');
            res.end();
        })



    });

    pool.getConnection(function(err, conn) {

        console.log('another connection');

        conn.query('SELECT * FROM `items`', function(err, rows) {
            if (err) console.log(err);

            // метод pool.end закрывает все соединения
            pool.end(function(err) {
                console.log('pool closed');
            })
        });

    });
});

// событие connection генерируется при установлении подключения
pool.on('connection', function() {
    console.log('connected');
});


app.listen(port, function() {

    console.log('app listening on port ' + port);

});

