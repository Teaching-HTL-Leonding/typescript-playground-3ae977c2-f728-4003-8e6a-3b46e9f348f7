const circleX = 0;
const circleY = 0;
const diameter = 100;
let isDragging = false;

let x = 0;
let y = 0;
let time = 60;

let score = 0;
let waitingTime: number
let biggerCircleX = 0;
let biggerCircleY = 0;

function setup() {
  createCanvas(800, 600);

  x = random(50, 750);
  y = random(50, 550);

  biggerCircleX = random(70, 730);
  biggerCircleY = random(70, 530);

  while (areOverlapped(x, y, biggerCircleX, biggerCircleY, diameter / 2, 70)) {
    biggerCircleX = random(70, 730);
    biggerCircleY = random(70, 530);
  }

  waitingTime = setInterval(gameTime, 1000);

}

function draw() {
  background("lightgray");

  drawCircle();
  solutionCircle();

  fill("black");
  textSize(15);

  text(`score ${score}`, 50, height - 50);

  text(`time ${time}`, width - 70, height - 50);
  textSize(20)

  if (time <= 0) {
    background("white")
    text("Game Over!", width / 3, height / 2);
    text(`Final Score ${score}`, width / 3, height / 2 + 20)
    clearInterval(waitingTime)
  }

}

function mousePressed() {

  let dist = distance(mouseX, mouseY, x, y);

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

  const inside = areCompletelyInside(x, y, biggerCircleX, biggerCircleY, diameter / 2, 70)

  if (inside) {
    score++
    biggerCircleX = random(70, 730);
    biggerCircleY = random(70, 530);
  }
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

function distance(jsX: number, jsY: number, mX: number, mY: number): number {
  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);
}

function areOverlapped(blueCircleX: number, blueCircleY: number, targetX: number, targetY: number, r1: number, r2: number): boolean {
  return distance(blueCircleX, blueCircleY, targetX, targetY) < r1 + r2;
}


function gameTime() {
  time--;
}


function areCompletelyInside(blueCircleX: number, blueCircleY: number, targetX: number, targetY: number, r1: number, r2: number): boolean {
  return distance(blueCircleX, blueCircleY, targetX, targetY) + r1 < r2;
}