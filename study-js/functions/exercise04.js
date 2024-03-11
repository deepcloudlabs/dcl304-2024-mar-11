function fun(x, y, z) {
    if (arguments.length !== 3)
        throw "You must provide exactly three parameters!";
    return x * y + z;
}

//console.log(`fun(): ${fun()}`)
//console.log(`fun(2): ${fun(2)}`)
//console.log(`fun(2,4): ${fun(2, 4)}`)
console.log(`fun(2,4,8): ${fun(2, 4, 8)}`)
//console.log(`fun(2,4,8, 16): ${fun(2, 4, 8, 16)}`)