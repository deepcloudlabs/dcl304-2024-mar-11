numbers = [4, 8, 15, 16, 23, 42]
// even -> cubed -> sum
// 1. imperative
let result = 0;
for (const number of numbers) { // external loop
    if (number % 2 === 0) {
        const cubed = number ** 3;
        result += cubed;
    }
}
console.log(`solution is ${result}.`); // solution is 78760.
// 2. declarative: functional programming
// Hadoop: HDFS + MapReduce
// i) filter/map/reduce: High-Order Functions
// pipeline, function composition
// ii) pure function: lambda expression
// internal loop
const even = u => u % 2 === 0;
const cubed = v => v ** 3;
const sum = (s,u) => s+u;
result = numbers.filter(even).map(cubed).reduce(sum); // 1-liner
console.log(`solution is ${result}.`); // solution is 78760.
