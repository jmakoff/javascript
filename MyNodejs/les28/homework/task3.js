/*###Задача 3
 Используя потоки(Streams) прочитайте с 10 по 20 байт файла test.txt и сохраните результат в файле output.txt. */
var fs = require('fs');
var readerStr = fs.createReadStream('test1.txt', {start: 10, end:20})
readerStr.setEncoding('utf-8');
readerStr.on('data', function (readedData) {
      var readData  = readedData
    console.log(readData)
    var writeStr = fs.createWriteStream('output.txt')
    writeStr.write(readData, 'utf-8');
    writeStr.end();

})
