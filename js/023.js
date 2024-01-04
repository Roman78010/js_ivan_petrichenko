"use strict";

let str = 'some';
let strObj = new String(str); // При использовании методов, в этом случае, изначальная строка оборачивается в объект, применяется метод (к объекту) и значение выходит из оболочки и возвращается к изначальному типу;

console.log(typeof(str)); // string;
console.log(typeof(strObj)); // object;


console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // Создание объекта john с свойствами и методами объекта soldier;

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // Deprecated method;

// Object.setPrototypeOf(john, soldier);

// console.log(john.armor);

john.sayHello();