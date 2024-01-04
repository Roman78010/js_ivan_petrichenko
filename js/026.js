"use strict";

// To string

// 1

console.log(typeof(String(null))); // Not use method;
console.log(String(4));

// 2

console.log(typeof(5 + ''));
console.log(typeof(null + ''));


const num = 5;

console.log("https://fb.com/catalog/" + num);

const fontSize = 26 + 'px'; // Example;

// To Number

// 1

console.log(typeof(Number('4'))); // Not use method;

// 2

console.log(typeof(+'5'));

// 3

console.log(typeof(parseInt('15px', 10))); // Второй аргумент представляет собой десятичную систему исчисления;

let answ = +prompt('Hello', '');

// To Boolean

// 0, "", NaN, null, undefined;

// 1

let switcher = null;

if (switcher) {
    console.log('Working...');
}


switcher = 1;

if (switcher) {
    console.log('Working...');
}

// 2
console.log(typeof(Boolean('4'))); // Not use method;

// 3
console.log(typeof((!!'4444'))); // Rare use method;