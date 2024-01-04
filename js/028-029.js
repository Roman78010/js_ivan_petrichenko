"use strict";

// const box = document.getElementById('box'); // Изначально мы обращаемся к document, дальше можно будет не обращаться; // Обязательно, как параметр метода нужно вписывать строку, не переменную;

// console.log(box);

// const btns = document.getElementsByTagName('button');

// // console.log(btns);

// console.log(btns[1]); // Получение из псевдомассива (html коллекции) по тегу 'button' второго элемента;

// const circles = document.getElementsByClassName('circle');
// console.log(circles);

// const hearts = document.querySelectorAll('.heart'); // Когда мы работаем с селекторами обязательно нужно указывать точку (.heart);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); // Этот метод позволяет выбрать один элемент по данному селектору, первый который нам попадется, следуя сверху к низу;

// console.log(oneHeart);

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // В эти переменные пойдут только те элементы которые подойдут по определенному селектору '.heart', которые находяться только внутри wrapper;
    //   hearts = document.querySelectorAll('.heart'), // Метод forEach существует только в данном методе 'querySelectorAll';
    //   oneHeart = wrapper.querySelector('.heart');
      oneHeart = document.querySelector('.heart');
    
// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; // Способ задать сразу несколько стилей одному элементу с помощью 'cssText' значения записываются как в css файле;
// box.style.cssText = `background-color: blue; width: ${num}px`; // Вариант с использованием переменной (удобно если мы определенные параметры расчитываем динамически, например ширина модального окна в зависимости от устройства);

btns[1].style.borderRadius = '100%'; // Назначить inline стили второму элементу из псевдомассива 'btns';
circles[0].style.backgroundColor = 'red';

// Если нам нужно над несолькими элементами произвести одни и те же действия нужно использовать цикл; 

// for (let i = 0; i < hearts.length; i++) { // Rare use method;
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div'); // Как параметр передается название того тегачто мы создаем. Важно, что этот тег существует только внутри javascript`а. Такой метод испоьзуется при работе с React;
// const text = document.createTextNode('Тут был я'); // Rare use method;

div.classList.add('black');

// document.body.append(div); // Добавления тега 'div' в конец тега 'body';
document.querySelector('.wrapper').append(div); // Если переменная используется только один раз ее не обязательно выносить отдельно; // Получаем элемент у которого класс 'wrapper' и в конец него помещаем нами созданный в js`е 'div';

// wrapper.prepend(div); // То же что и метод append, только элемент помещаетс в начало;

// hearts[0].before(div); // Поставить элемент "до";
// hearts[0].after(div); // Поставить элемент "после";

// circles[0].remove(); // Удалить эелемент;

hearts[0].replaceWith(circles[0]); // Заменить первый элемент из html коллекции hearts на тот что указан как параметр метода replaceWith();



// Устаревшие конструкции (раньше все команды шли только через родителей);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]); // Первый параметр, тот элемент который мы вставляем 'div', второй перед кем мы его вставляем;

// wrapper.removeChild(hearts[1]);

// wrapper.replaceChild(circles[0], hearts[0]); // Первый параметр элемент на который мы хотим что-то поменять, второй параметр, тот элемент что меняется;

// div.innerHTML = 'Hello World';
div.innerHTML = '<h1>Hello World</h1>'; 

// div.textContent = 'Hello World'; // Этот метод исрользуются когда данные которые мы получаем приходят от пользователя, в модальном окне, в каком-то вопросе, что б они не сломали нам верстку (можно вставить стороний скрипт на страницу);

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // Первым параметром указываем куда мы хотим поестить элемент, вторым какой элемент;