// 1. Переменные
// var name = 'Vlada' // string-строчный тип данных, стараться не использовать VAR
// // camelCase- написание 1-го слова с маленькой буквы, последующие слова с большой без пробелов
// const firstName = 'Vlada'
// const lastName = 'Chvanova' // string-строчный тип данных
// // let age = 20 // number-числовой тип данных
// const isProgrammer = true // boolean- булевый тип данных

// // Валидное(ый)- корректный код, название и т.д.
// const withNum5 = '5'
// // const if = 'mkef' // err- нельзя называть переменные зарезервированными словами
// //  нельзя ставить цифру в начале названия переменной. Пример const 5wihNum = '5'
// // 2 Мутирование
// // console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age)

// // const name = 'vlada'
// // alert(name)
// // const lastName = prompt('Введите фамилию')
// // alert(firstName + ' ' + lastName)
// // 3 Операторы
// let currentYear = 2020
// const birthYear = 1999
// // const age = currentYear - birthYear

// const a = 10
// const b = 5
// let c = 32
// // c = c + a // это 2 одинаковых выражения
// c += a // это 2 одинаковых выражения
// // console.log(a + b)
// // console.log(a - b)
// // console.log(a * b)
// // console.log(a / b)
// // console.log(currentYear++) // можно использовать и до и после слов, если до то сначала выполнится инкрементирование, если после то сначала выведется старое значение, а потом введя еще раз переменную, получим инкрементированное значение
// // console.log(currentYear)
// // console.log(c)

// // 4 Типы данных
// const isProgrammer = true
// const name = 'Vlada'
// const age = 20
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5 Приоритет операторов
// const fullAge = 20
// const birthYear = 1999
// const currentYear = 2020

// const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)

// 6 Условные операторы
// 1 способ
// const courseStatus = 'ready' // ready, fail, pending

// if (courseStatus === 'ready') {
//     console.log('курс готов')
// } else if (courseStatus === 'pending') {
//     console.log('курс в разработке')
// } else {
//     console.log('курс не готов')
// }

// 2 способ
// }
// let courseStatus = 'ready'
// switch (courseStatus) {
//     case 'fail':
//         console.log('Курс не готов!');
//         break;
//     case 'pending':
//         console.log('Курс в процессе разработки');
//         break;
//     case 'ready':
//         console.log('Можно начинать обучение!')
//         break;
//     default:
//         console.log('Курс впроцессе разработки')

// }

// const isReady = true
// // 1 cпособ записи с булиевым типом данных
// // if (isReady === true) {
// //     console.log('все готово!')
// // }
// // 2 способ записи той же задачи
// // if (isReady) {
// //     console.log('все готово!')
// // } else {
// //     console.log('все ne готово!')
// // }
// // 3 cпособ записи таких значений и способ записи if-а
// // называется "ТЕРНАРНЫЕ ВЫРАЖЕНИЯ"
// isReady ? console.log('все готово!') : console.log('все ne готово!')

// 7 Булевая логика
// &&- если оба значения совпадают, то только тогда будет true
// || - если верно хотя бы одно значение-тогда будет true
// !true or !!true - если !(1)-то это false, если !!(2), то останется true

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year;
// }
// // 1 способ
// // const myAge = calculateAge(1999)
// // console.log(myAge)
// //  2 способ
// // console.log(calculateAge(1999)); // не создаем переменную, а сразу прописываем функцию
// function logInfoAbout(name, year) {
//   const age = calculateAge(year);
//   if (age > 0) {
//     console.log("Человек по имени " + name + " имеет возраст " + age);
//   } else {
//     console.log("это уже будущее!");
//   }
// }
// logInfoAbout("Vlada", 2020);

// 9 Массивы
// 1 способ
// const cars = ["Mazda", "Mers", "Ford"]; // так правильно
// // 2 способ
// // const cars = new Array("Mazda", "Mers", "Ford"); // так писать не надо
// cars[0] = "Porche";
// cars[3] = "Masda";
// // или cars[cars.length] = 'Mazda'
// console.log(cars);

// 10 Циклы
// const cars = ["Mazda", "Mers", "Ford", "Porche"];

// // for (let i = 0; i < cars.length; i++) {
// //   const car = cars[i];
// //   console.log(car);
// // }
// for (let car of cars) {
//   console.log(car);
// }

// 11 Объекты
// const person = {
//   firstName: "Vlada",
//   lastName: "Chvanova",
//   year: 1999,
//   lenguages: ["ru", "en"],
//   hasBoyfriend: true,
//   greet: function () {
//     console.log("greet");
//   },
// };
// console.log(person.firstName);
