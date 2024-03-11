function fun({z,y,x}) {
    console.log(arguments)
    return x * y + z ;
}

//console.log(`fun(): ${fun()}`)
//console.log(`fun(2): ${fun(2)}`)
//console.log(`fun(2,4): ${fun(2, 4)}`)
console.log(`fun({x: 2, y:4, z: 8, t: 42}): ${fun({z: 8, x: 2, y:4, t:42})}`)
//console.log(`fun(2,4,8, 16): ${fun(2, 4, 8, 16)}`)