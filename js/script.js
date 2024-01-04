'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector("button");

// const width = box.clientWidth;
// const height = box.clientHeight;
// const width = box.offsetWidth;
// const height = box.offsetHeight;
const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);

// Если стоит свойство box-sizing: border-box; - от происходит изменение поведения скрипта и паддинги уже включаються в ширину элемента. И что б высчитать clientWidth нужно от ширины элемента (к примеру 400px) отнять ширину вертикальной полосы прокрутки (к примеру 15px).

// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px'; // Раскрыть форму по всей высоте элемента (с учетом прокручиваемого контента)
//     console.log(box.scrollTop);
// });

console.log(box.getBoundingClientRect().top);

// Computed стили - это стили которые уже были применены к элементу. Эти стили приходят от css файла, преобразовавшись в фиксированые значения. Стили прописаные с помощью JavaScript`а (inline стили) не отображаться в Computed стилях. 

const style = window.getComputedStyle(box);

console.log(style.display);

// JavaScript никак неможет работать с псевдоэлементами, можно только получить значения у псевдоэлементов, но изменить нельзя.

console.log(document.documentElement.scrollTop); // Если страница прокручена на какое-то расстояние вниз и выставить данное значение в ноль document.documentElement.scrollTop = 0; - то страница будет пролистана в самый вверх. Особое внимание что данное существует не у объекта, а у объекта documentElement.

// window.scrollBy(0, 400)
// window.scrollTo(0, 400)