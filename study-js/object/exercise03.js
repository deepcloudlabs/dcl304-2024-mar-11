const circle2 = {
    x: 0,
    y: 0,
    radius: 100,
    draw: {
        thickness: 2,
        color: {
            r: 100,
            g: 10,
            b: 235
        },
        style: "solid"
    }
}

let circle1 = {...circle2}; // shallow cloning
circle1.radius++;
circle2.radius++;
console.log(circle1.radius) // 101
console.log(circle2.radius) // 101
circle1.draw = {...circle2.draw}
circle1.draw.thickness++;
circle2.draw.thickness++;
console.log(circle1.draw.thickness) // 3
console.log(circle2.draw.thickness) // 3


