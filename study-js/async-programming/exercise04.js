async function fun(max=60,size=6) {
    const numbers = [];
    while (numbers.length < size){
        const number = Math.floor(Math.random() * max) + 1;
        if (numbers.includes(number)) continue;
        numbers.push(number);
    }
    numbers.sort((x,y)=>x-y);
    if (Math.random() < 0.5) throw "Something is wrong!";
    return numbers;
}
for (const i in new Array(1,2,3,4,5,6,7,8,9))
    fun().then( sayilar => console.log(sayilar) )
        .catch( hata => console.log(hata) )

// fun().then( sayilar1 => fun().then( sayilar2 => console.log(sayilar1+sayilar2)) )
async function application(){
    const numbers1 = await fun(); // blocking!
    const numbers2 = await fun();

}
