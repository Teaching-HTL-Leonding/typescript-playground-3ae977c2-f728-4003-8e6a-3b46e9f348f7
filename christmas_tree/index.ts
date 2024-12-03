const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;

function setup() {
  colorMode(HSB)
  let color1 = 0
  createCanvas(500, 500);
  background("black");
  fill("green");
  noStroke();

  let trianglewidth = INITIAL_TRIANGLE_BASE_WIDTH

  translate(width / 2, TOP_MARGIN)
  for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
    fill("green")
    triangle(- trianglewidth / 2, trianglewidth / 2, 0, 0, trianglewidth / 2, trianglewidth / 2)
    fill(color1, 75, 75)
    circle(- trianglewidth / 2, trianglewidth / 2 +15, SPHERE_DIAMETER)
    circle( trianglewidth / 2, trianglewidth / 2 +15, SPHERE_DIAMETER)

    translate(0, trianglewidth / 4)
    trianglewidth *= 1.5
    color1 += 60
  }

  fill("brown")
  translate(0, trianglewidth / 1.5 / 2 / 2)
  rect(- TRUNK_WIDTH / 2, 0, TRUNK_WIDTH, TRUNK_HEIGHT)
}
