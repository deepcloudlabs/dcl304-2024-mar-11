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
async function gun(){
    return 42;
}

async function sun(){
    return "Hello Mars!";
}
function run(){
    return new Promise((accept,reject)=>setTimeout(() => accept("Hello Moon!"),3_000));
}

Promise.all([
    fun(60),
    fun(70),
    fun(80),
    fun(90),
    fun(100),
    fun(110),
    run(),
    fun(120),
    fun(130),
    fun(140),
    fun(150),
    gun(),
    sun()
]).then(console.log)
  .catch(console.error)
