'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');
// console.log(btns[0].classList.length); // Отображает какое количество классов у элемента;
// console.log(btns[0].classList.item(1)); // item() позволяет получить класс, который располагается под определенным индексом. В данном случае параметр указывает на класс (селектора) под индексом ноль;
// console.log(btns[1].classList.add('red', 'testClass')); // Можно добавлять сразу несколько классов;
// console.log(btns[0].classList.remove('blue')); // Метод который позволяет удалять классы;
// console.log(btns[0].classList.toggle('blue')); // Если сейчас этот класс есть на элементе, то он будет убран, если его нет, то добавлен;

// if (btns[1].classList.contains('red')) { // Метод позволяет проверять наличие класса на определенного элементе, при этом определенного класса и возвращает нам булиновое значение;
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // Устаревший вариант просмотра классов на элементе которые есть в наличии;
// console.log(btns[0].classList); // Актуальный вариант просмотра классов на элементе которые есть в наличии;

wrapper.addEventListener('click', (e) => { // Этот метод называется делигированием, если элемент подходит под условие на нем будет срабатывать та функцияЮ которую мы написали или передали. Мы делигируем события с родителя на его потомков. Этот способ (принцып) примечателен тем что он позволяет применять те же действия и к новым созданым элементам, через javascript;
    // console.dir(e.target);
    if (e.target && e.target.matches("button.red")) { // Идет проверка на определенные совпадения;
    // if (e.target && e.target.tagName == "BUTTON") { // В html структуре не все элементы поддерживают событие клика (например тег <br>), что бы быть абсолютно увереным что действие (клик) произошол на элементе (и небыло никаких ошибок) мы прописываем e.target, проверяем было ли событие или нет. Вторым условием произошло ли наше событие на нужной нам кнопке по тегу "BUTTON". Также, аналогично, мы можем проверять nodeName и className либо classList.contains('blue');
    // if (e.target && e.target.classList.contains('blue')) {
        console.log('Hello');
    }
});

// btns.forEach(btn => { // Ошибочный вариант, лучше использовать делегирование, потому что метод перебора ничего незнает о новой созданной кнопке и не применяется к ней;
//     btn.addEventListener('click', () => {
//         console.log('hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn);