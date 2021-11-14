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

// function numbers(a,b){
//     if(typeOf a === "number"&& typeOf b === "number"){
//          return a > b ? b : a;
//     }
//    return `Одно из значений не число`;
//     // if (a<b){
//     //     return a;
//     // }
//     // return b;
// }
// console.log(numbers(2,3))

// Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в фортмате
//ключ:значение используя Object.keys() и for...of

// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };

// user.mood = 'happy';
// user.hobby = 'skydiving';
// user.premium = false;
// for (const key of Object.keys(user)) {

//     console.log(`${key}: ${user[key]}`);

// }

// console.log(user)

// У нас есть объект, в котором храняться зарплаты
//нашей команды
//Напишите код для сумирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// let total = 0;

// for (const key of Object.values(salaries)) {
//     total += key;
// }
// console.log(total)

// Напишите ф-цию calcTotalPrice(stones, stonesName),
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает м возвращает общую стоимость камней
//с таким именем, ценой и количеством из объекта

// const stones = [
//   { name: "Щебень", price: 150, quantity: 50 },
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
// ];
// const calcTotalPrice = function(stones, stonesName) {
//     let total = 0;
//     for (const stone of stones) {
//         if (stone.name === stonesName) {
//             total += (stone.price * stone.quantity);
//         }

//     }
//     return total;
// }
// console.log(calcTotalPrice(stones, "Щебень"));

// const calcTotalPrice = function (stones, stonesName) {
//   let total = 0;
//   [...stones].forEach((stone) => {
//     stone.name === stonesName ? (total += stone.price * stone.quantity) : 0;
//   });
//   return total;
// };

// console.log(calcTotalPrice(stones, "Щебень"));

// const calcTotalPrice = function (stones, stonesName) {
//   return [...stones].reduce(
//     (acc, { name, price, quantity }) =>
//       name === stonesName ? (acc += price * quantity) : acc,
//     0
//   );
// };

// console.log(calcTotalPrice(stones, "Щебень"));


// Найти первый уникланый символ в строке
//в строке будут только буквы латинского алфавита и они будут в lowerCase
// let input1 = 'leetcode'; //0
// let input2 = 'loveleetcode'; //2
// let input3 = 'aabb'; //-1

// const firstUniceChar = function (str) {
//   const array = [...str]

//   const letters = array.reduce((acc, letter) => {
//     return {...acc, [letter]: acc[letter] ? acc[letter] + 1 : 1}
//   }, {})
//   for (const key in letters) {
//     if (letters[key] === 1) {
//       return array.indexOf(key);
//     };

//   };
//   return -1;
// };
// console.log(firstUniceChar(input1));
// console.log(firstUniceChar(input2));
// console.log(firstUniceChar(input3));

//Найти уникальные элементы с помощью reduce 

// const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
// function findUniqNumber(numbers) {
//     return numbers.reduce((acc, number) => {
//         if (acc.includes(number)) {
//             return acc
//         } else { return [...acc, number]}

//     },[])
// }

// console.log(findUniqNumber(numbers)); 
const numbers = [1, 9, 0, 1, 5, 9, 1, 6];
function findUniqNumber(numbers) {
    return numbers.reduce((acc, number) => acc.includes(number) ? acc: [...acc, number],[])
}
console.log(findUniqNumber(numbers)); 
