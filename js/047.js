"use strict";

class Rectangle {
  constructor(height, width) { // Два этих параметра будут к нам приходить при создании экземпляра класса.
    this.height = height;
    this.width = width;
  } // Ненужно ставить точку с запятой. Если ставить то это приведет к ошибке.

  calcArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle { // extends - буквально означает "наследуется от"
  constructor(height, width, text, bgColor) {
    super(height, width); // Что бы не копировать свойства и методы? от первообразного класса используется метод super() который это делает автомачтически. Тоесть вызывает (суперконструктор) то же самое, что находилось у конструктора родителя. Этот метод всегда должен быть первым после раскрытия конструктора.
    this.text = text;
    this.bgColor = bgColor; 
  }

  showMyProps() {
    console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
  }
  
}

const div = new ColoredRectangleWithText(25, 10, 'Hello World', 'red');

div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(long.calcArea());
// console.log(square.calcArea()); // Так как это метод нужно ставить круглые скобки.

// Принципы ООП (Объектно Ориентированое Программирование):
// 1. Абстракция - когда мы отделяем концепцию от ее экземпляра. Тоесть шаблон по которому мы что-то создаем и мы на основе этих шаблонов создаем экземпляры.
// 2. Наследование - спосбность нашего объекта или класса базироваться на другом объекте или классе. Главный механизм для повторного использования какого-то кода. При этом наследственное такое отношение классов и будет четко определять их иерархию.