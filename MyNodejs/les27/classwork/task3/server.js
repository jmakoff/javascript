/*Загрузите модуль test.js из папки test(папка находится рядом с файлом с задачами) 3-мя разными способами.
 */
var imported = require('./test')

var imp_test = require('./../task3/test.js')
var imp_test2 = require('./test.js')
imported();
imp_test();
imp_test2();