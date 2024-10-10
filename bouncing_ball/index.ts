function setup() {
  createCanvas(600, 400);
}

const circleDiameter = 50;

let circleCenterX = 0;
let directionX = 2;


let circleCenterY= 0;
let directionY = 2;

function draw() {
  background("gold");

  stroke("white");
  strokeWeight(3);
  fill("lime");
  circle(circleCenterX, height / 2, circleDiameter);

  circleCenterX += directionX;

  if (circleCenterX >= width || circleCenterX <= 0) {
    directionX *= -1; 
  }


stroke("white");
  strokeWeight(3);
  fill("blue");
  circle(width/2, circleCenterY, circleDiameter);

  circleCenterY += directionY;

  if (circleCenterY >= height || circleCenterY <= 0) {
    directionY *= -1; 
  }

}
