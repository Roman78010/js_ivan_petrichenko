'use strict';

// filter
// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => name.length < 5);

// console.log(shortNames);



// map
// const answers = ['IvAn', 'AnnA', 'Hello'];

// const result = answers.map(elem => elem.toLowerCase());
// console.log(result);


// every / some
// const some = [4, 'qwq', 'sdfds'];

// console.log(some.some(elem => typeof(elem) === 'number'));
// console.log(some.every(elem => typeof(elem) === 'number'));



// reduce
// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3);
// console.log(res);
// Третий аргумент у метода reduce() является начальное значение.


// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);



// Example
const obj = {
  ivan: 'person',
  ann: 'person',
  dog: 'animal',
  cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);
