let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

let blackDotX = 0;
let blackDotY = 0;
const blackDotRadius = 10;

const bigCircleRadius = 50;
let isDragging = false;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("lightblue");

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();

  push();
  translate(width / 2, height - bigCircleRadius);
  fill("white");
  stroke("red");
  circle(0, 0, bigCircleRadius * 2);

  fill("black");
  noStroke();
  circle(blackDotX, blackDotY, blackDotRadius * 2);
  pop();
}

function mousePressed() {
  const dragged = isInside(blackDotX, blackDotY, mouseX - width / 2, mouseY - (height - bigCircleRadius));

  if (dragged <= blackDotRadius * 2) {
    isDragging = false;
  } else {
    isDragging = true;
  }
}

function mouseDragged() {
  if (isDragging) {
    blackDotX = mouseX - width / 2;
    blackDotY = mouseY - (height - bigCircleRadius);
  }
}

function mouseReleased() {
}

function isInside(jsX: number, jsY: number, mX: number, mY: number): number {
  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);

}
