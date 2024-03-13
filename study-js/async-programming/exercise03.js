function fun(max=60,size=6) {
    return new Promise(function (accept,reject) {
        const numbers = [];
        while (numbers.length < size){
            const number = Math.floor(Math.random() * max) + 1;
            if (numbers.includes(number)) continue;
            numbers.push(number);
        }
        numbers.sort((x,y)=>x-y);
        if (Math.random() < 0.5) reject("Something is wrong!");
        setTimeout(() => accept(numbers), (Math.random() * 10 + 3)* 1000);
    });
}
for (const i in new Array(1,2,3,4,5,6,7,8,9))
    fun().then( sayilar => console.log(sayilar) )
         .catch( hata => console.log(hata) )