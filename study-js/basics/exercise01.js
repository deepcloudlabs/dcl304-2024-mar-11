// var vs let vs const
// best practice: prefer let over var almost always!
function gun(){
    var x = 42; // global -- after var --> local
}
function sun(){
    var x = 0;
    x++; // global -- after var --> local
}
gun()
console.log(x) // 42
sun()
console.log(x) // 43
