let num = 20;

function showFirstMessage(text) { // Если эту функцию не вызывать, то такая функция просто существует в коде и больше ничего. Такие функции стоит не забывать вызывать;
    console.log(text);
    // let num = 10; // Локальная переменная;
    console.log(num);
}

showFirstMessage('Hello World!'); // Вызов функции. Если функцию не вызывать, то она не будет работать;
console.log(num);

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc(a, b) {
//     return (a + b);
// }

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => {
    console.log('42');
    return a + b;
};

// Callback

function first() {
    // Do something
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}
first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок');
}

learnJS('JavaScript', done);