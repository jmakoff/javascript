/*
 ###Задача 2
 Создайте пустой(неинициализированный) буфер длиной 100 байт, заполните его байтами со значениями от 0 до 99
 и выведите в консоль его содержимое.
 */
const myBuf = Buffer.alloc(100)
var arr = [];
for (i=0;i<100;i++){
    arr.push([i])
}
myBuf.write(arr.toString(),0 , myBuf.length)
    console.log(myBuf)
