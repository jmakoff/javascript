/*###Задача 1
 Создайте EventEmitter, который каждую секунду будет генерировать событие 'tick'.
  Создайте функцию-обработчик события 'tick', которая будет выводить в консоль количество секунд,
   прошедшее со времени генерации первого события 'Tick'.
 */
var events = require('events');
var timer = require('timers');

const EvEmitter = new events.EventEmitter;
var i = 0
EvEmitter.on('error', (err)=>{
    console.log(err)
});

EvEmitter.on('tick', ()=> {
    console.log(i++);
})
var myTimer = timer.setInterval
myTimer(()=>{
    EvEmitter.emit('tick')
}, 1000)