'use strict';

// console.log(1);

// setTimeout(() => {
//   console.log('timeout');
// }, 4000);

// setTimeout(() => {
//   console.log('timeout_4000');
// }, 4000);

// console.log(2);

// Ассинхроными являются операции которые запускаются с течением определенного времени (setTimeout, seInterval), кроме этого это могут быть абсолютно любые запросы на сервер, но если копнуть в глубь, то все колбеки являются ассинхроными. 

// Call Stack - это те операции (вызовы функций) которые выполняются в данный момент.
// Web Apis - специальное хранилище которое есть в браузере для того что бы хранить какие-то ваши промежуточные данные. Этот контейнер служит для того что бы запоминать что, к примеру, ваш setTimeout был вызван и через 5000 мл он должен вернуть значение. 
// Callback Queue - все функции становяться в очередь.

// Если у вас на странице есть какае-то очень тяжелая задача, которая работает внутри цикла или внутри перебирающего метода, то она может полностью остановить работу вашей страницы. Из-за того что она попадает в Call stack (выполняется) и все остальные функции ждут ее выполнения (пока она закончит) в Callback Queue. Решается данная проблема разбитием на части (этапы) выполнения большой функции.


// let k = 0;

// function count() {
//   for (let i = 0; i < 1e9; i++) {
//     k++;
//   }
//   alert('Done');
// }

// count();


setTimeout(() => {
  console.log(1);
}, 0);

console.log(2);

// 2
// 1
// Такое поведение из-за того что (ассинхроный) setTimeout проходит круг, сначло попаддает в Web Apis, потом в Callback Queue и лишь потом Call Stack. А синхронный console.log(2); сразу в Call Stack. И JavaScript всегда вместо нулевой задержки подставляет задержку 4 мс для совместимости между разными браузерами.
// Иногда используют такой костыль с задержкой в 0 мс для того что бы выполнить определенные операции после ассинхроного кода.