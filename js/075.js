'use strict';

// try {
//   console.log('Normal');
//   console.log('result');
// } catch(e) {
//   console.log('error');
// }

// console.log(a);
// console.log('Still normal');

// В блок catch приходит объект ошибки (аргумент у catch).
// Преимущество такой конструкции, что если возникнет обычная ошибка в коде, то она не даст выполняться коду дальше. Код который будет написан после конструкции try catch будет без проблем выполняться.

try {
  console.log('Normal');
  console.log(a);
  console.log('result');
} catch(error) {
  console.log(error.name);
  console.log(error.massage);
  console.log(error.stack);
} finally {

}

console.log('Still normal');


// Пример как избежать ошибки, которая не выполняет код дальше на многостраничном сайте. На главной странице данный код не вызовет никаких ошибок и нормально выполнется. На других страницах, на которых нету такого элемента с классом ('.active') код пойдет по сценарию конструкции try catch, произойдет ошибка которая будет обработа блоком catch за счет чего код сможет дальше выполняться. В блоке catch можно ничего не указывать, тогда консоль на странице останется чистой.
try {
  document.querySelector('.active').addEventListener('click', () => {
    console.log('click');
  });
} catch(e) {
  console.log(e);
}
