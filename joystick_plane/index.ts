let fighter: p5.Image;

const fighterImageWidth = 475;
const fighterImageHeight = 724;
const fighterDisplayHeight = 200;
const fighterDisplayWidth = fighterDisplayHeight * (fighterImageWidth / fighterImageHeight);
let fighterPositionX = 0;
let fighterPositionY = 0;

const movementRadius = 50;
const stickRadius = 10;

let stickPositionX = 0;
let stickPositionY = 0;

let isDragging = false;

function preload() {
  fighter = loadImage("https://cddataexchange.blob.core.windows.net/images/Spaceship.png");
}

function setup() {
  createCanvas(500, 500);
}

function draw() {

  background("lightblue");


  const speedX = stickPositionX / 8;
  const speedY = stickPositionY / 8;

  const showingSpeedX = Math.round(speedX);
  const showingSpeedXY = Math.round(speedY);

  const showingFighterPositionX = Math.round(fighterPositionX);
  const showingFighterPositionY = Math.round(fighterPositionY);

  fighterPositionX += speedX;
  fighterPositionY += speedY;

  push();
  translate(30, 450);
  fill("black");
  noStroke();
  textSize(10);
  text(`speed ${showingSpeedX} ${showingSpeedXY}`, 0, 0);
  text(`fighterposition ${showingFighterPositionX} ${showingFighterPositionY}`, 0, 15);
  pop();

  push();
  imageMode(CENTER);
  translate(width / 2 + fighterPositionX, height / 2 + fighterPositionY);
  image(fighter, 0, 0, fighterDisplayWidth, fighterDisplayHeight);
  pop();

  push();
  translate(width / 2, height - 50);
  stroke("red");
  fill("white");
  circle(0, 0, movementRadius * 2);

  fill("black");
  noStroke();
  circle(stickPositionX, stickPositionY, stickRadius * 2);
  pop();

  if (fighterPositionX <= -width / 2 + fighterDisplayWidth / 2) {
    fighterPositionX = -width / 2 + fighterDisplayWidth / 2;
  } else if (fighterPositionX >= width / 2 - fighterDisplayWidth / 2) {
    fighterPositionX = width / 2 - fighterDisplayWidth / 2;
  }

  if (fighterPositionY <= - height / 2 + fighterDisplayHeight / 2) {
    fighterPositionY = - height / 2 + fighterDisplayHeight / 2;
  } else if (fighterPositionY >= height / 2 - fighterDisplayHeight / 2) {
    fighterPositionY = height / 2 - fighterDisplayHeight / 2;
  }

}

function mousePressed() {
  const dist = isInside(
    stickPositionX,
    stickPositionY,
    mouseX - width / 2,
    mouseY - (height - movementRadius));

  if (dist <= stickRadius) {
    isDragging = true;
  } else {
    isDragging = false;
  }

}

function mouseDragged() {
  if (dist) {
    stickPositionX = mouseX - width / 2;
    stickPositionY = mouseY - (height - movementRadius);
  }
}

function mouseReleased() {
}

function isInside(jsX: number, jsY: number, mX: number, mY: number): number {
  const dx = jsX - mX;
  const dy = jsY - mY;
  return Math.sqrt(dx * dx + dy * dy);

}