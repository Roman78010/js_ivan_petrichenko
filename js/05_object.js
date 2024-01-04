const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTset: function() {
        console.log('Test');
    }
};

options.makeTset();

const {border, bg} = options.colors;
console.log(border);

// console.log(options['colors']['border']);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) { // Способ перебора объектов;
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`); // Способ перебора объектов внутри объектов;
//             // counter++;
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(Object.keys(options).length);

// Test (My practice);
// const testObj = {
//     firstName: 'Dmytro',
//     lastName: 'Kriukov',
//     age: 55,
//     languages: 'ukr',
//     isMarried: false
// };

// console.log(Object.keys(testObj).length);