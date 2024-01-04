"use strict";

// Три способа как назначить обработчика событий;

// 1. В html документе в качестве атрибута прописывем событие с приставкой 'on' // В реальных проектах не используется (способ не рекомендуется к применению); onclick="alert('Click')"

const btns = document.querySelectorAll('button'), // 2. Второй способ так же почти никогда не используется;
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// }; // onclick в данном случае - это свойство DOM дерева которое также называется, как и обработчик события; 

// btn.onclick = function() {
//     alert('Second click');
// }; // Если указать два одинаковых обработчика на одну и тот же элемент с разными значениями, то выполняться всгеда будет выполняться последний + такой вариант невозможно удалять;


// 3. 
// btn.addEventListener('click', () => {
//     alert('Click');
// }); // Первый параметр, название нашего события (не обработчика);

// btn.addEventListener('click', () => {
//     alert('Second click');
// }); // Преимущество такого способа в том что при назаначении нескольких событий на один и тот же элемент, первое событие не теряется и все события выполняються последовательно;

// btn.addEventListener('mouseenter', (e) => { // Event (данные о событии что произошло) передается как параметр callback функции и может называться как угодно (имеет произвольное имя, обычно 'event' или 'e'), всегда передвется первым параметром;
//     // console.log(e); // Одни из самых важных свойств это type: 'mouseenter' (тип события что произошло) и target: 'button#btn' (тот элемент на котором произошло событие);
//     // console.log(e.target);
//     e.target.remove();
//     // console.log('Hover');
// });

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement); // Не нужно deleteElement вызывать ставя круглые скобки после ее имени;
// overlay.addEventListener('click', deleteElement); // Не нужно deleteElement вызывать ставя круглые скобки после ее имени;

// Всплытие событий - это когда обработчик события сначало срабатывает на самом вложенном элементе и после срабатывает на следущем элементе (на родителе, если он есть), по иерархии на вверх ДОМ дерева. Всплытие можно отменять, но на практике это почти никогда не нужно и это может привести новым к проблемам;

btns.forEach(btn => { // btn является параметром callback функции, он не оборачивается в круглые скобки из-за того что функция выполняет одно действие;
    btn.addEventListener('click', deleteElement, {once: true}); // Третим параметром addEventListener`а являються опции; Опция {once: true} говорит что действие будет произведенно всего один раз;
});

const link = document.querySelector('a');

link.addEventListener('click', function (event) {
    event.preventDefault(); // Метод который отменяет стандартное поведение браузера. Помещается в самое самое начало;
    console.log(event.target);
});
