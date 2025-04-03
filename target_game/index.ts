const circleX = 0;
const circleY = 0;
const diameter = 100;
let isDragging = false;

let x = 0;
let y = 0;

let score = 0;

let biggerCircleX = 0;
let biggerCircleY = 0;

function setup() {
  createCanvas(800, 600);

  x = random(25, 750);
  y = random(25, 550);

  biggerCircleX = random(70, 730);
  biggerCircleY = random(70, 530);

  while (areOverlapped(x, y, biggerCircleX, biggerCircleY, diameter / 2, 70)) {
  biggerCircleX = random(70, 730);
  biggerCircleY = random(70, 530);
  }
}

function draw() {
  background("lightgray");

  drawCircle();
  solutionCircle();

}

function mousePressed() {

  let dist = isInside(mouseX, mouseY, x, y);

  if (diameter <= dist) {
    isDragging = false;
  } else {
    isDragging = true;
  }
}

function mouseDragged() {
  if (isDragging) {
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased() {
  isDragging = false;
}

function drawCircle() {
  translate(x, y);
  fill("blue");
  circle(0, 0, diameter);
}

function solutionCircle() {
  resetMatrix();
  noFill();
  stroke("black");
  circle(biggerCircleX, biggerCircleY, 140);
}

function isInside(jsX: number, jsY: number, mX: number, mY: number): number {
  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);
}

function areOverlapped(blueCircleX: number, blueCircleY: number, targetX: number, targetY: number, r1: number, r2: number): boolean {
  return isInside(blueCircleX, blueCircleY, targetX, targetY) < r1 + r2;
}