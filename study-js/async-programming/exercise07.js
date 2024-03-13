async function fun(){
    return 42;
}
// async pipeline
fun().then(async (number) => 2*number)
     .then(async (number) => 3*number)
     .then(async (number) => number + 108)
     .then(async (number) => number / 2)
     .then(console.log)