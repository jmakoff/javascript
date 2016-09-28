/*###Задача 2
 Рядом с файлом с задачами в папке Homework находится файл test.txt. Напишите код, который выведет в консоль с 10 по 15 байт этого файла.
 */
var fs = require('fs')
fs.open('test.txt', 'r', (err, fd)=>{
    if (err){
        console.log("we have an error")
    }
    else{
        buf = Buffer.alloc(10)
        fs.read(fd, buf, 2, 5, 10, (err, bytesRead)=>{
            console.log(bytesRead)
            console.log(buf)

        });
        fs.close(fd)
    }

}
)//I think have some problem here)
