'use strict';

// const now = new Date('2020-05-01'); // Используется, когда у нас на html странице у input`а стоит атрибут type="date".
// const now = new Date(2020, 5, 1, 20); // Способ задать дату прямыми аргументами (числами). Месяца считаються от 0, часы от часов по гринвичу. P.S. Год вседа должен быть четырехзначный.
// const now = new Date(0); // Точка отсчета 1970-01-01T00:00:00.000Z. Любую дату можно трансформировать в миллисекуды и наоборот миллисекунды в дату.
// const now = new Date(-9999999); // Способ получить дату ранее чем точка отсчета.

const now = new Date('2023-03-16');
// new Date.parse('2020-05-01'); // Альтернативный вариант создания даты.

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // Нумерация идет от воскресенья. Восресение имеет номер 0.
// console.log(now.getUTCHours()); // Получить время по UTC.

// console.log(now.getTimezoneOffset());
// console.log(now.getTime()); // Сколько миллисекунд прошло с точки отсчета времени.


// console.log(now.setHours(40)); // 40 - это минуты. Лучше не использовать такой способ из-за неочевидности.
// console.log(now);


// Упрощенный пример измерения скорости работы функции;
let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);