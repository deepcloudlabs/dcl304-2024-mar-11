let radius = 42;
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
let c1 = new Circle(); // red unit circle
let c2 = new Circle(1,-1,100,"blue");
let c3 = new Circle(1,-1,100); // "red"
let c4 = new Circle(1,-1); // radius: 1, color: "red"
for (let circle of [c1,c2,c3,c4]){
    console.log(circle.area())
}
