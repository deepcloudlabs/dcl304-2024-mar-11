async function fun(max=60,size=6) {
    const numbers = [];
    while (numbers.length < size){
        const number = Math.floor(Math.random() * max) + 1;
        if (numbers.includes(number)) continue;
        numbers.push(number);
    }
    numbers.sort((x,y)=>x-y);
    console.log(`fun(${max},${size}): returning the numbers...`)
    return numbers;
}
async function promiseAll(){
    return [
        await fun(60),
        await fun(70),
        await fun(80),
        await fun(90),
        await fun(100),
        await fun(110)
    ];
}

promiseAll().then(console.log)