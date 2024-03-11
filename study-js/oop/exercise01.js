// Object-based
let c1 = {
    x: 0,
    y: 0,
    radius: 100,
    color: "red"
}
console.log(c1)
console.log(c1.color)
console.log(c1["color"])
c1.color = "blue"
console.log(c1.color)
console.log(c1["color"])
for (let p in c1){ // reflection
    console.log(`${p}: ${c1[p]}`)
}
// Object-Oriented