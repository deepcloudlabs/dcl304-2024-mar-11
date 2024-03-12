function fun(){
    for (let i=0;i<10;++i){
        console.log(i); // 0, 1, 2, ..., 9
    }
    console.log(`After exited from the loop: ${i}`) // 10
}

fun()