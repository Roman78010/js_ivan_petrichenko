const str = 'teSt';
const arr = [1, 2, 4];

console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = 'Hello world';

console.log(logg.slice(6, 11)); // Считать не от ноля. Как с свойством length, начина с одного;
console.log(logg.substring(6, 11)); // Не поддерживает отрицательные значения;
console.log(logg.substr(6, 5)); // Второй параметр указывает сколько символов нам нужно вырезать;


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
// console.log(parseInt(test)); // Метод который преобразовывает строку в число (меняет тип) и (обрезает ее) возвращает целое число (Integer);
console.log(parseFloat(test));