//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию
// При помощи цыкла for додайте все четные числа от   min до max
// const max = 50;
// const min = 23;
// let total = 0;

// for (let i = max; i >= min; i -= 1) {
//     // console.log(i);
//     if (i % 2 !== 0) {
//         // console.log(i);
//         continue;

//     }
//     total += i;
// }
// console.log(total);

//Напишите программу, которая получит от пользователя
//число (количество минут) и выведет в консоль
//строку в формате часов и минут
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// 70 === 01:10

// function appDateMin(min) {
//   const hours = Math.floor(min / 60);
//   const mins = min % 60;
//   const modifyHours = String(hours).padStart(2, 0);
//   const modifyMins = String(mins).padStart(2, 0);

//   //   console.log(`Time : ${modifyHours}:${modifyMins}`);
//   return `Time : ${modifyHours}:${modifyMins}`;
// }

// console.log(appDateMin(70));

//4. Напишите код, который будет спрашивать 
//логин с помощью prompt и логировать результат 
//в консоль браузера 
//Если посетитель вводит "Админ",
//то prompt запрашивает пароль. 
//Если ничего не ввели или нажата клавиша Esc 
//вывести стороку "Отменено" 
//В противном случае вывксти строку "Я вас не знаю" 
//Пароль проверять так: 
//Если введён пароль "Я главный", 
//то вывести строку "Здравствуйте!" 
//иначе выводить строку "Неверный пароль!" 

// const loginInput = prompt("Введите свой логин");

// if (loginInput === "Админ") {
//     const passwordInput = prompt("Ведите свой пароль");
//     if (passwordInput === "Я главный") {
//         console.log("Здравствуйте!");
//     } else if (passwordInput === null) {
//         console.log("Отменено");
//     } else {
//         console.log("Неверный пароль!");
//     }

// } else if (loginInput === null) {
//     console.log("Отменено");
// } else {
//     console.log("Я вас не знаю");
// }
 
// switch (loginInput) {
//     case "Админ":
//         const passwordInput = prompt("Ведите свой пароль");
//         switch (passwordInput) {
//             case "Я главный":
//                 console.log("Здравствуйте!");
//                 break;
//             case null:
//                 console.log("Отменено");
//                 break;
//             default:
//              console.log("Неверный пароль!");   
//         }
//         break;
//     case null:
//         console.log("Отменено");
//         break;
//     default:
//         console.log("Я вас не знаю");
// }

//Создайте массив styles с элементами «Джаз» и «Блюз».
//Добавьте «Рок-н-ролл» в конец.
//Замените значение «Блюз» на «Классика».
//Удалите первый элемент массива и выведите его в консоль.
//Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ["Джаз", "Блюз"]
// styles.push("Рок-н-ролл")
// styles.splice(1, 1, "Классика")
// console.log(styles.shift())
// styles.unshift("Рэп","Регги")
// console.log(styles)
// -------------------------------
//Напишите функцию min(a, b), которая возвращает
//меньшее из чисел a, b
//нужно добавить проверку, что функция получает числа

function numbers(a,b){
    if(typeOf a === "number"&& typeOf b === "number"){
         return a > b ? b : a;
    }
   return `Одно из значений не число`;
    // if (a<b){
    //     return a;
    // }
    // return b;
}
console.log(numbers(2,3))
