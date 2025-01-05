const circlesCenterX: number[] = [];
const circlesCenterY: number[] = [];
const circlesDiameter: number[] = [];
const circlesFill: string[] = [];
const circlesLifetime: number[] = [];
let nextCircle = 0;
const maxDiameter = 150;

const availableColors = [
  "pink",
  "yellow",
  "aqua",
  "lime",
  "red",
  "gold",
]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");

  if (millis() >= nextCircle) {
    const d = random(0, maxDiameter);
    circlesDiameter.push(d);
    circlesCenterX.push(random(d / 2, width - d / 2));
    circlesCenterY.push(random(d / 2, height - d / 2));
    circlesFill.push(random(availableColors));

    // Add a lifetime to the circle. After this time, it will be removed.
    circlesLifetime.push(millis() + random(2000, 4000));

    nextCircle = millis() + random(500, 2000);
  }

  for (let i = circlesLifetime.length - 1; i >= 0; i--) {
    circlesDiameter.splice(i, 1)
    circlesCenterX.splice(i, 1)
    circlesCenterY.splice(i, 1)
    circlesFill.splice(i, 1)
  }

  noStroke();
  for (let i = 0; i < circlesDiameter.length; i++) {
    fill(circlesFill[i]);
    circle(circlesCenterX[i], circlesCenterY[i], circlesDiameter[i]);
  }
}
