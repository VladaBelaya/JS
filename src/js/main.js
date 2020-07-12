// 1 Number
// const num = 42; // integer
// const float = 42.42; // float
// const pow = 10e3;

// console.log("MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("Math.pow 53", Math.pow(2, 53) - 1);
// console.log("MIN_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
// console.log("MAX_VALUE", Number.MAX_VALUE);
// console.log("MIN_VALUE", Number.MIN_VALUE);
// console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
// console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
// console.log("2 / 0", 2 / 0);
// console.log(Number.NaN);
// console.log(typeof NaN);
// const weird = 2 / undefined;
// console.log(Number.isNaN(weird));
// console.log(Number.isNaN(42));
// console.log(isFinite(Infinity));
// console.log(isFinite(42));

// const stringInt = "40";
// const stringFloat = "40.42";
// console.log(parseInt(stringInt) + 2);
// console.log(parseFloat(stringFloat) + 2);
// console.log(+stringFloat + 2); // знак '+' заменяет parseInt -Float, преобразует строку в число

// console.log(0.4 + 0.2);
// console.log(2 / 5 + 1 / 5);
// console.log(+(0.4 + 0.2).toFixed(1));

// 2 BigInt - тип данных- нужен для того, чтобы работать с числами > MAX_SAFE_INTEGER
// console.log(typeof 90071992547409919999999n);
// console.log(90071992547409919999999n - 9007199254740991999999n); // операции можно проводить только если все элементы являются BigInt(ами)
// console.log(-90071992547409919999999n);
// // console.log(-90071992547409919999999.66n); //error -десятичные значения
// // console.log(10n - 4) // error, нельзя делать операции с разными типами данных
// console.log(parseInt(10n) - 4); // но можно преобразовать BigInt в Number
// // console.log(10n - BigInt(4)); // или Number в BigInt

// 3 Math
// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.sqrt(25)); //КВАДРАТНЫЙ КОРЕНЬ ИЗ 25 = 5
// console.log(Math.pow(5, 2)); // ВРЗВЕСТИ В СТЕПЕНЬ
// console.log(Math.abs(-42)); // МОДУЛЬ ЧИСЛА
// console.log(Math.max(42, 12, 23, 11, 422)); // ВЫВОДИТ МАКСИМАЛЬНОЕ ЗНАЧЕНИЕ ИЗ ПРЕДСТАВЛЕННЫХ
// console.log(Math.min(42, 12, 23, 11, 422)); // ВЫВОДИТ МИНИМАЛЬНОЕ ЗНАЧЕНИЕ ИЗ ПРЕДСТАВЛЕННЫХ
// console.log(Math.floor(4.9)); // ОКРУГЛЯЕТ ЗНАЧЕНИЯ В МЕНЬШУЮ СТОРОНУ
// console.log(Math.ceil(4.9)); // ОКРУГЛЯЕТ ЗНАЧЕНИЯ В БОЛЬШУЮ СТОРОНУ
// console.log(Math.round(4.9)); // ОКРУГЛЯЕТ ЗНАЧЕНИЯ К БЛИЖАЙШЕМУ ЦЕЛОМУ ЧИСЛУ
// console.log(Math.trunc(4.9)); // ВОЗВРАЩАЕТ ЦЕЛОЕ ЧИСЛО ПУТЕМ УДАЛЕНИЯ ДРОБНОЙ ЧАСТИ
// console.log(Math.random()); // НЕ ПРИНИМАЕТ ПАРАМЕТРОВ, НО ВЫДАЕТ РАНДОМНОЕ ЗНАЧЕНИЕ ЧИСЛА

// // 4 EXEMPLE
// function getRandomBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// console.log(getRandomBetween(10, 42));
