function setup() {
  createCanvas(600, 400);
}

const circleDiameter = 50;
const circle2 = 50;

let circleCenterX = 2;
let direction = 2;

let circleCenterY = width /2;
let direction2 = 2


function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += direction;

  
  if (circleCenterX >= width || circleCenterX <= 0) {
    // Reverse sign of direction (positive -> right, negative -> left)
    direction *= -1; 
  }
  fill("blue")
  circle(width /2, 0, circle2)

  circleCenterY += direction2;



}
