var express = require('express');
var app = express();
var path = require('path');
var port = process.env.port || 1337;
var bodyParser = require('body-parser');

var mysql = require('mysql');
var session = require('express-session');
// подключение модуля express-mysql-session
var MySQLStore = require('express-mysql-session')(session);


var jsonParser = bodyParser.json();
var textParser = bodyParser.text();

app.set('views', './pages');
app.set('view engine', 'ejs');

app.use(jsonParser);
app.use(textParser);
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'pages')));


var options = {
    // параметры соединения с бд
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '3215232152',
    database: 'data',
    // как часто будет проводиться удаление устаревших сессий(миллисекунды)
    checkExpirationInterval: 900000,
    // время жизни сессии(миллисекунды)
    expiration: 86400000
};
var sessionStore = new MySQLStore(options);
app.use(session({

    secret: 'secret',
    saveUninitialized: true,
    resave: true,
    store: sessionStore
}));


app.get('/', function (req, res) {
    res.redirect('/home');
})
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, "pages/home.html"))
})
app.post('/login', function (req, res) {
    if (req.body.login === "admin" && req.body.password == '12345') {
        res.send('You`ve been successfully authorised as ' + req.body.login)
        req.session.username = req.body.login;
        req.session.isLoggedIn = true;
        console.log(req.session)
    }
    else {
        res.send('Authorisation problem!')
    }

})
var connection = mysql.createConnection({//request to DB
    connectionLimit: 50,
    host: 'localhost',
    user: 'root',
    password: '3215232152',
    database: 'data',
    port: 3306
});
app.get('/img/:type', function (req, res) {
    connection.connect(function (err) {

        if (err) console.log(err.stack);

        console.log('connected as id ' + connection.threadId);
    });

    if (req.params.type == 'all') {
        connection.query('SELECT * FROM `projects`', function (err, rows, fields) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            for (var i = 0; i < rows.length; i++) {
                res.write(`<div class="inline" style="background-image: url('${rows[i].src}')"><div class="overlay"><div class="center text-center"><span class="glyphicon glyphicon-info-sign " onclick="giveInfo(${rows[i].id})"></span>&nbsp;&nbsp;<span class="glyphicon glyphicon-edit" onclick="edit(${rows[i].id})"></span> </div></div></div>`)

            }
            res.end();

        })
    }
    else {
        var sql = 'SELECT * FROM `projects` WHERE ?? = ?';
        var ins = ['category', req.params.type];
        sql = mysql.format(sql, ins);
        connection.query(sql, function (err, rows) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            for (var i = 0; i < rows.length; i++) {
                res.write(`<div class="inline" style="background-image: url('${rows[i].src}')"><div class="overlay"><div class="center text-center"><span class="glyphicon glyphicon-info-sign " onclick="giveInfo(${rows[i].id})"></span>&nbsp;&nbsp;<span class="glyphicon glyphicon-edit"></span> </div></div></div>`)
            }
            res.end();

        })
    }
})
app.get('/info/:infoID', function (req, res) {//дополнительная инф-я по каждому из проэктов
    var sql = 'SELECT * FROM `projects` WHERE `id` = ?';
    var ins = [req.params.infoID];
    sql = mysql.format(sql, ins);

    connection.query(sql, function (err, rows) {
        console.log(rows[0].id)
        /* res.writeHead(200, {'Content-Type': 'text/html'});*///answer about info
        res.render('info',
            {
                data: `<tr>
<td>${rows[0].id}</td>
<td>${rows[0].title}</td>
<td>${rows[0].author}</td>
<td>${rows[0].description}</td>
<td>${rows[0].date}</td>
</tr>`,
                photo: `<img class="img img-rounded" id="info" src= '../${rows[0].src}'>`
            })

    })
})
app.get('/edit/:id', function (req, res) {/*editing block*/
    var sql = 'SELECT * FROM `projects` WHERE `id` = ?';
    var ins = [req.params.id];
    sql = mysql.format(sql, ins);
    connection.query(sql, function (err, rows) {
        console.log('editing element with id ' + rows[0].id)
        res.render('edit', {
            data: `
<div class="form-group">
<label for="title" class="col-sm-2 control-label">Type: </label><div class="col-sm-10 "> <input type='text' id='title' class="form-control" value="${rows[0].title}" ></div></div> <br/>
<div class="form-group"> <label for="author" class="col-sm-2 control-label">Author: </label><div class="col-sm-10"> <input type='text' id='author'  class="form-control" value="${rows[0].author}" ></div></div> <br/>
<div class="form-group"> <label for="description" class="col-sm-2 control-label">Description: </label><div class="col-sm-10"> <input type='text' class="form-control" id="description" value="${rows[0].description}" /></div></div><br/>
<div class="form-group"> <label for="category" class="col-sm-2 control-label">Category:</label><div class="col-sm-10"> <input type='text' class="form-control" id="category" value="${rows[0].category}" ></div> </div><br/>
`
        })
    })
})
/*edit-item handling*/
app.put('/edit/:id', function (req, res) {
    var sql = 'UPDATE `projects` SET title=?, author=?, description=?, category=? WHERE id=?'
    var insert =[req.body.title, req.body.author, req.body.description, req.body.category, req.params.id];
    sql = mysql.format(sql, insert);

    var query = connection.query(sql, function (err) {
        if (err) console.log(err)
        console.log('database updated!!!')
    })
    res.send()
})
app.get('/contact', function (req, res) {//contact form sending
    res.sendFile(path.join(__dirname, 'pages/contact.html'))
})
app.get('/addProject', function (req,res) {
    res.sendFile(path.join(__dirname, 'pages/add.html'))
})

/*adding element handling*/
app.post('/add', function (req, res) {
   /* var sql1 = `SELECT * FROM data.projects`
    connection.query(sql1, function (err, rows) {
        lengthDB = rows.length;
        console.log('length = '+ lengthDB);
    })*/
    var sql = 'INSERT INTO `projects` ( id, title, author, description, category, date) VALUES ( ?, ?, ?, ?, ? , ?)'
    var insert = [10/*lengthDB+1 (не получилось)*/ , req.body.title, req.body.author, req.body.description, req.body.category, '2016-08-02'/*тоже пришлось захаркодить*/]
    console.log(insert);
    sql = mysql.format(sql, insert)
    connection.query(sql, function (err) {
        if (err) console.log(err)
        console.log('database +1 !!!')
    })
    res.send()
})
/*message handling (write comments in array)*/
var comments = []//here will be your comments
app.post('/sendComment', function (req, res) {
     comments.push(req.body)
    console.log(comments)
})

app.listen(port, function () {
    console.log('server listening on ' + port + ' port')
})