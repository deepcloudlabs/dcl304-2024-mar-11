function fun(max=60,size=6) {
    const numbers = [];
    while (numbers.length < size){
        const number = Math.floor(Math.random() * max) + 1;
        if (numbers.includes(number)) continue;
        numbers.push(number);
    }
    numbers.sort((x,y)=>x-y);
    return numbers;
}
for (const i in new Array(1,2,3,4,5,6,7,8,9))
    console.log(fun());