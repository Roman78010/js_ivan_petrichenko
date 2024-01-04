'use strict';
// Функция генератор записывается как function* со звездочкой.

// function* generator() {
//   yield 'S';
//   yield 'c';
//   yield 'r';
//   yield 'i';
//   yield 'p';
//   yield 't';
// }

// const str = generator();

// console.log(str.next()); // { value: 'S', done: false }
// console.log(str.next()); // { value: 'c', done: false }
// console.log(str.next()); // { value: 'r', done: false }
// console.log(str.next()); // { value: 'i', done: false }
// console.log(str.next()); // { value: 'p', done: false }
// console.log(str.next()); // { value: 't', done: false }
// console.log(str.next()); // { value: undefined, done: true }

// Значение false у свойства done говорит выполнился наш генератор полностью или нет.

function* count(n) {
  for (let i = 0; i < n; i++) {
    yield i;
  }
}

for (let k of count(7)) {
  console.log(k);
}
// Способ запустить функцию генератор максимальное количество раз.

const counter = count(7);

console.log(counter.next().value);
console.log(counter.next().value);
console.log(counter.next().value);