/*###Задача 2
 Дано массив users:
 ```
 users = [
 { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
 { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
 ]
 ```

 Реализуйте следующее:
 * При GET-запросе по пути /users массив users отображается на странице в виде списка(по свойству name). При клике по каждому из элементов списка отправляется GET-запрос по пути /users/userID, где userID - свойство id массива users, соответствующее элементу списка.
 * При GET-запросе по пути /users/userID на странице отображается информация о соответствующем пользователе - свойства элемента массива users - name и age.
 */
var fs = require('fs');
var express = require('express');
var app = express();
var http = require('http');
var path = require('path')
var port = process.env.port || 1337;

var users = [
    { name: 'Jane', age: 23 }, { name: 'John', age: 30 }, { name: 'Vasya', age: 25 },
    { name: 'Yvonne', age: 34 }, { name: 'Will', age: 18 }, {name: 'Jack', age: 26}
]
app.get('/users/:id', function (req, res) {
    res.send(`name: ${users[req.params.id].name} age: ${users[req.params.id].age}`)

})
app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname, '/view/list.html'))

})

app.listen(port, function () {
    console.log("listening on " + port)
})
