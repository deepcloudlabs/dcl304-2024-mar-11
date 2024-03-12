// Generator Function: Functional Programming
function fun(number){
    let sequence = [number];
    while (number > 1){
        number = number%2 === 1 ? 3 * number + 1 : number / 2;
        sequence.push(number);
    }
    return sequence;
}

console.log(fun(107)); //  [17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]