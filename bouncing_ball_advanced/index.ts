function setup() {
  createCanvas(600, 400);
}

const circleDiameter = 50;

let circleCenterX = 0;
let directionX = 1;


let circleCenterY= 0;
let directionY = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX,circleCenterY , circleDiameter);

  circleCenterX += directionX
  circleCenterY += directionY

  if (circleCenterX >= width || circleCenterX <= 0) 
    directionX *= -1

      if (circleCenterY >= height || circleCenterY <= 0) 
    directionY *= -1
  }