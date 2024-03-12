// Generator Function: Functional Programming
function* fun(number){
    yield number
    while (number > 1){
        number = number%2 === 1 ? 3 * number + 1 : number / 2;
        console.log(`fun: yielding ${number}...`)
        yield number;
    }
}
for (let number of fun(107))
    console.log(`for: ${number}...`);