"use strict";

// let x = 5; alert( x++ );

// [ ] + false - null + true //  Пустой массив при арифметическом сложение ([]) приводиться к пустой строке (''), ктипу данных string;
// console.log(typeof([] + false)); // 'false';
// console.log([] + false - null); // NaN;
// console.log([] + false - null + true); // NaN;

// let y = 1; let x = y = 2; alert(x); // Присваивание значения "x" идет справа на лево (по значению);

// [ ] + 1 + 2
// console.log([] + 1 + 2); // "12";

// alert( "1"[0] ); // 1;

// console.log(2 && 1 && null && 0 && undefined); // null; // Логическая "И" запинается на лжи (первой, в данном случае "null") и дальше возращает значение, как default, дальше код просто не пойдет;

// console.log(!!( 1 && 2 ) === (1 && 2)); // false;

// alert( null || 2 && 3 || 4 ); // 3; //Логическая "ИЛИ" запинается на правде;

// const a = [1, 2, 3],
//       b = [1, 2, 3]; // Это разные хранилища информации в которых лежит разная информация пусть она и похожа;

// console.log(a == b);

// alert( +"Infinity" ); // Infinity;

// console.log("Ёжик" > "яблоко"); // false; // Идет посимвольное сравнение. Важны порядковые номера символов в UNICODE таблице;

// alert( 0 || "" || 2 || undefined || true || falsе ); // 2;