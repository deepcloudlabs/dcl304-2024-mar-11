numbers = [42, 15, 23, 16, 8, 4]
console.log(numbers)
numbers.sort(function(x,y){
    if (x < y) return -2;
    if (y < x) return +3;
    return 0;
})
numbers.sort(function(x,y){
    return x-y;
})
numbers.sort(function(x,y){
    return y-x;
})
// lambda expression -> pure function: syntactic sugar
numbers.sort((x,y) => y-x)
console.log(numbers)
