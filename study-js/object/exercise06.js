let numbers = [4, 8, 15, 16, 23, 42]
/*
let first = numbers[0];
let second = numbers[1];
let third = numbers[2];
*/
let [first, second, third, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(third);
console.log(rest);