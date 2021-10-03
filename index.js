//3. Напишите цыкл, который выводит в консоль
//числа от max до min по убыванию
// При помощи цыкла for додайте все четные числа от   min до max
const max = 50;
const min = 23;
let total = 0;

for (let i = max; i >= min; i -= 1) {
    // console.log(i);
    if (i % 2 !== 0) {
        // console.log(i);
        continue;
    
    }
    total += i;
}
console.log(total);