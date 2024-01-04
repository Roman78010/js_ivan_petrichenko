// let numbersOfFilms;

// function start() {
//     numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numbersOfFilms == '' || numbersOfFilms == null || isNaN(numbersOfFilms)) {
//         numbersOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// // start();

// const personalMovieDB = {
//     count: numbersOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько его оцените?', '');
                
//         if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length < 50) { // Если пользователь нажал "отменить": нам возвращается значение null;
//             personalMovieDB.movies[a] = b; // Как добавлять переменные в объект: вызываем у переменной (через точку) свойство и к этому свойству добавляем значение возвращаемое другой переменной (через квадратные скобки), потом присваиваем этой переменной другую переменную (её возвращаемое значение);
//             console.log('Done!');
//         } else {
//             console.log('Error!');
//             i--; // Если инструкция if, выше, не выполнелась, мы обратимся к ней снова (внутри цикла) с помощью этого выражения;
//         }
//     }
// }

// // rememberMyFilms();



// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { // Один из способов (через логический оператор "и") задать диапазон;
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) { // Для того что бы задать, еще одно, альтернативное условие нужно использовать конструкцию else if;
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// // detectPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i += 1) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`); // Запись полученных от пользователя значений в массив;
//     }
// }

// writeYourGenres();


// console.log(personalMovieDB);




const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                    b = prompt('На сколько его оцените?', '');
                    
            if (a !== '' && b !== '' && a !== null && b !== null && a.length < 50 && b.length < 50) { // Если пользователь нажал "отменить": нам возвращается значение null;
                personalMovieDB.movies[a] = b; // Как добавлять переменные в объект: вызываем у переменной (через точку) свойство и к этому свойству добавляем значение возвращаемое другой переменной (через квадратные скобки), потом присваиваем этой переменной другую переменную (её возвращаемое значение);
                console.log('Done!');
            } else {
                console.log('Error!');
                i--; // Если инструкция if, выше, не выполнелась, мы обратимся к ней снова (внутри цикла) с помощью этого выражения;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) { // Один из способов (через логический оператор "и") задать диапазон;
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) { // Для того что бы задать, еще одно, альтернативное условие нужно использовать конструкцию else if;
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = !personalMovieDB.privat;
        } else {
            personalMovieDB.privat = !personalMovieDB.privat;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i += 1) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`); // Запись полученных от пользователя значений в массив;

            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLocaleLowerCase();

            if (genres === '' || genres === null) { // Значение "null" соответствует кнопке "Отмена";
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            } else {
                // personalMovieDB.genres[i - 1] = genre;
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort(); // Метод sort(); сортирует кириллицу с учетом регистра (сначало большие буквы, потом маленькие);
            }

        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${++i} - это ${item}`);
        });
    }
};