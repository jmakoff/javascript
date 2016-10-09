var cookieParser = require('cookie-parser');
var session = require('express-session');

// подключение модуля express-mysql-session
var MySQLStore = require('express-mysql-session')(session);

module.exports = {

    createStore: function () {

        var options = {
            // параметры соединения с бд
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: '3215232152',
            database: 'session_test1',

            checkExpirationInterval: 900000,
            expiration: 86400000
        };

        // создание хранилища для сессии
        return sessionStore = new MySQLStore(options);
    }
}