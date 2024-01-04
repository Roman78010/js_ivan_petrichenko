// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement); // Тег html в javascript`е соответствует document.documentElement;
// console.log(document.body.childNodes); // Этот метод позволяет получить все узлы которые находяться внутри этого родител 'body'; // Не каждый узел это элемент, но каждый элемент это узел;
// console.log(document.body.firstChild); // Первый узел у элемента (родителя) 'body';
// console.log(document.body.firstElementChild); // Первый элемент у элемента (родителя) 'body';
// console.log(document.body.lastChild); // Последний узел у элемента (родителя) 'body';

// console.log(document.querySelector('#current').parentNode.parentNode); // Способ получить дважды родительский элемент у элемента с уникальным идентификатором '#current';
// console.log(document.querySelector('#current').parentElement); // Способ родительский элемент у элемента с уникальным идентификатором '#current';

// Дата-атрибуты (data-произвольное имя="произвольное значение", data-current="3", если такой вариант: data-current - тогда мы будем работать булевым значением) - созданы для более удобного ориентирования по DOM дереву с помощью js;

// console.log(document.querySelector('[data-current="3"]').previousSibling); // #text; // Получение педыудущего узла от выбраного элемента;
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); // <li>4</li>>; // Получение следуещего элемента от выбраного элемента;


for (let node of document.body.childNodes) { // Способ перебрать псевдомассив 'document.body' состоящий из узлов, пропустив (исключив) все узлы являющиеся переносами строк благодаря оператору 'continue';
    if (node.nodeName == '#text') {
        continue;
    }
    console.log(node);
}