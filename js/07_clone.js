"use strict";

let a = 5,
    b = a; // Идет передача от одной переменой к другой по ЗНАЧЕНИЮ (работает только с примитивными типами данных); 

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; // Идет передача от одной переменой к другой по ССЫЛКЕ (работает только с комплексными [сложными] типами данных);

// copy.a = 10; // Модифицируя переменную мы модифицируем наш изначальный объект по ссылке;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
} // Способ клонирования через функцию;

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10; //  Поверхностная копия (работает только с элементами что лежат на первом уровне). Не распространяется на элементы с вложеностью (объекты, массивы и т.д.);

console.log(numbers);
console.log(newNumbers);


const add = {
     d: 17,
     i: 20
}; // Способ создания независимой поверхностной копии объекта (добавления в один объект нескольких элементов);

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);



const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // Способ создания поверхностой копии массивов;

newArray[1] = 'asd';

console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'hdrezka'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'instagram', 'facebook']; // Spread оператор (...имя 'переменной');

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

const array = ['a', 'b'];

const newSecondArray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};