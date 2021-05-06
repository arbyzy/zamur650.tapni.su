'use strict';

let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

var myVar = setInterval(function () {
  myTimer();
}, 1000);

function myTimer() {
  let now = new Date();  

  let day = String(now.getDate())
  let month = String(now.getMonth() + 1)
  let year = now.getFullYear();

  document.getElementById('time').innerHTML = now.toLocaleTimeString();
  document.getElementById('date').innerHTML = `${days[now.getDay()]}, ${day} ${months[month - 1]} ${year}`
}