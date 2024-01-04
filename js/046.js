// Представьте человека без определенного места жительства, в таком случае получается что этот человек функционирует в пределаъ всего мира, у него нет какой-то конкретной привязки к определенному месту. Но усли мы поместим его в специальное учереждение, где он может жить и чем-то заниматься то он уже получит так называемый контекст вызова. Теперь у него есть свое место для функционирования. Функции в JavaScript`е ведут себя также.
// Функция может вызываться четырьмя способами и в каждом контест вызова отличается.
'use strict';

// 1. Обычная функция.
// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(4, 5); // Если вызывать без 'use strict' то this будет равно window. Если с 'use strict', то undefined.


// 2. this с объектом.
// const obj = {
//   a: 20,
//   b: 15,
//   sum: function() {
//     console.log(this); // {a: 20, b: 15, sum: ƒ}
//     function shout() {
//       console.log(this); // undefined - из-за того что это простой вызов функции, он уже не относится к методу ОБЪЕКТА. Это функция которая запускается внутри метода объекта.
//     }
//     shout();
//   }
// };

// obj.sum(); // Если мы используем метод внутри объекта то контекст вызова всегда будет ссылаться на этот же объект. Тоесть контекст у методов объекта - сам объект.

// 3. this в конструкторах и классах.
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function() {
//     console.log(`Hello ${this.name}`);
//   };
// }

// let ivan = new User('Ivan', 28); // В данном случае this всегла будет ссылаться на новый объект new User('Ivan', 28). this в конструкторах и классах - это новый экземпляр объекта.


// // 4. this с bind. Ручная привязка. (Часто встречается в сложных разработках на React).
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2); // Создает новую функции связаную сопределенным контекстом.

// console.log(double(3));
// console.log(double(13));

const btn = document.querySelector('button');

btn.addEventListener('click', function(){
  // console.log(this); // <button></button>
  this.style.backgroundColor = 'red';
});

btn.addEventListener('click', () => {
  e.target.style.backgroundColor = 'red';
});

// btn.addEventListener('click', () => {
//     console.log(this); // У стрелочной функции нет своего собственного контекста вызова. Она его всегда будет брать у своего родителя.
// });

const obj = {
  num: 5,
  sayNumber: function() {
    const say = () => {
      console.log(this.num);
    };
    say();
  }
};

obj.sayNumber(); // 5


const double = a => a * 2;

console.log(double(4));