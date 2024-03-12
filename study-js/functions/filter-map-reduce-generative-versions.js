numbers = [4, 8, 15, 16, 23, 42];

function* filter(predicate, values) {
    for (let value of values) {
        if (predicate(value)) {
            console.log(`filter: yielding ${value}...`)
            yield value;
        }
    }
}

function* map(fun, values) {
    for (let value of values) {
        console.log(`map: yielding ${value}...`)
        yield fun(value);
    }
}

function reduce(fun, initValue, values) {
    let result = initValue;
    for (let value of values) {
        console.log(`reduce: ${result}`);
        result = fun(result, value);
    }
    return result;
}

console.log(reduce((x, y) => x + y, 0, map(v => v ** 3, filter(u => u % 2 === 0, numbers))));