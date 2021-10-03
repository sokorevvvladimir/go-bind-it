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

function appDateMin(min) {
  const hours = Math.floor(min / 60);
  const mins = min % 60;
  const modifyHours = String(hours).padStart(2, 0);
  const modifyMins = String(mins).padStart(2, 0);

  //   console.log(`Time : ${modifyHours}:${modifyMins}`);
  return `Time : ${modifyHours}:${modifyMins}`;
}

console.log(appDateMin(70));
