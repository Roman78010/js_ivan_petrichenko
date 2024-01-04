// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 2000, 'Hello'); // Третий и последующие аргументы будут аргументами, которые будут принимать функция внутри;


const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAninmation() {
    const elem = document.querySelector('.box');
    let pos = 0; // Переменная позиции с именем 'pos', с которой все будет стартовать; 

    const id = setInterval(frame, 10); // В приципе задержка между фуункциями может иметь значение "0", здесь, у нас в коде, так как по стандарту практически во всех браузерах она (паузы между выполнением функций) изначально составляет 4ms;
    function frame() {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener('click', myAninmation);

// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000);
//     timerId = setInterval(logger, 500);
// });


// function logger () {
//     if (i === 3) {
//         clearInterval(timerId); // Функция, которая сбрасывает тайм-аут;
//     }
//     console.log('text');
//     i++;
// }




// let id = setTimeout(function log() {
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);

// Чем рекурсивный setTimeout лучше чем setInterval? Недостатки setInterval`а, сначало запускается таймер потом вызывается функция, если функция тяжелая и на выполнение ей нужно время, к примеру 3 секунды, таймер не учивыает время что нужно для выполнения функции и продолжает считать, как будто функция выполняется мгновенно; Премущество рекурсивного setTimeout`а на setInterval`ом в том что в рекурсивном setTimeout`е строго соблюдается очередность тацмер с вызовом функции;
