// Class
let Circle = function(x=0,y=0,radius=1,color="red"){
    // attributes -> new
    this.x = x ;
    this.y = y ;
    this.radius = radius ;
    this.color = color ;
    // methods -> ?
    this.area = function (){
        return this.radius * this.radius * Math.PI;
    }
    this.circumference = function (){
        return 2.0 * this.radius * Math.PI;
    }

}
let c1 = new Circle(1,1,100,"red");
let c2 = new Circle(2,2,200,"blue");
c1.thickness = 4;
Circle.prototype.style = "solid";
console.log(c1.thickness);
console.log(c2.thickness);
console.log(c1.style);
console.log(c2.style);
console.log(c1.hasOwnProperty("thickness")); // true
console.log(c1.hasOwnProperty("style")); // false
c1.style = "dashed";
console.log(c1.hasOwnProperty("style")); // true
console.log(c2.hasOwnProperty("style")); // false
delete c1.style;
delete Circle.prototype.style;
