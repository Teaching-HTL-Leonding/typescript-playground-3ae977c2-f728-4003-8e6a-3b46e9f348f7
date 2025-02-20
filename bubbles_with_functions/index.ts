const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let circle_interval: number;
let level_interval: number;

let points = 0;
let timer = 3000;

function setup() {
  createCanvas(300, 300);
  addRandomCircle();

  circle_interval = setInterval(addRandomCircle, timer);
  level_interval = setInterval(changeTimer, 10000);

}

function draw() {
  background("black")
  stroke("lime");
  noFill();

  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }

  fill("yellow");
  noStroke();
  text(`Your Point: ${points}`, width / 12, height / 10);

  if (circles_x.length >= 10) {
    background("black");
    textAlign(CENTER, CENTER);
    textSize(15);
    fill("red")
    text(`Game Over! Final Score ${points}`, width / 2, height / 2);
    clearInterval(circle_interval);
    clearInterval(level_interval);
  }

}

function addRandomCircle() {
  if (circles_x.length < 10) {
    circles_x.push(random(50, 250));
    circles_y.push(random(50, 250));
    circles_diameter.push(random(10, 50));
  }
}

function changeTimer() {

  if (circles_x.length < 10) {
    timer = timer / 2;
    circle_interval = setInterval(addRandomCircle, timer);
  }
}

function mouseClicked() {
  for (let i = 0; i < circles_x.length; i++) {
    if (isInside(mouseX, mouseY, i)) {
      circles_x.splice(i, 1);
      circles_y.splice(i, 1);
      circles_diameter.splice(i, 1);
      points++;
    }
  }
}

function isInside(x: number, y: number, circle_index: number) {

  const dx = Math.abs(x - circles_x[circle_index]);
  const dy = Math.abs(y - circles_y[circle_index]);
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circles_diameter[circle_index] / 2;

}
