'use strict';

const app = '123';

const number = 1;

// Пример отдельного модуля со своей областью видимости (Первый вариант: IIFE):
(function (){
  let number = 2;
  console.log(number);
  console.log(number + 3);
}());

console.log(number);


// Пример объектного интерфейса:
const user = (function(){
  const privat = function() {
    console.log('I`m a privat!');
  };

  return {
    sayHello: privat
  };
  
}());
// По простому, наша анонимная самовызывающяяся функция создает объект, она эспортирует только те методы и свойства которые нам нужны будут снаружи.

user.sayHello();
