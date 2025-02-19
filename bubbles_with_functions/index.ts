const circles_x: number[] = [];
const circles_y: number[] = [];
const circles_diameter: number[] = [];

let waiting_time = 3000;
let circle_interval: number;
let level_interval: number;

let points = 0;

function setup() {
  createCanvas(300, 300);

  addRandomCircle();
  circle_interval = setInterval(addRandomCircle, 3000);
}

function draw() {
  background("black");
  stroke("lime");
  noFill();

  for (let i = 0; i < circles_x.length; i++) {
    circle(circles_x[i], circles_y[i], circles_diameter[i]);
  }

  fill("yellow")
  textSize(25)
  text(`Points: ${points}`, width / 10, height / 10)
}

function addRandomCircle() {
  circles_x.push(random(50, 250));
  circles_y.push(random(50, 250));
  circles_diameter.push(random(10, 50));
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

function isInside(x: number, y: number, circle_index: number): boolean {
  const dx = x - circles_x[circle_index];
  const dy = y - circles_y[circle_index];
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance < circles_diameter[circle_index] / 2;

}