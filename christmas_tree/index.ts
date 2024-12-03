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
  let colorofcircle = 0
  createCanvas(500, 500);
  background("black");
  noStroke(); 77
  let trianglewidth = INITIAL_TRIANGLE_BASE_WIDTH

  translate(width / 2, TOP_MARGIN)
  for (let i = 0; i < NUMBER_OF_LAYERS; i++) {
    fill("green");
    triangle(-trianglewidth / 2, trianglewidth / 2, 0, 0, trianglewidth / 2, trianglewidth / 2)

    fill(colorofcircle, 80, 80)
    circle(-trianglewidth / 2, trianglewidth / 2 + SPHERE_DIAMETER / 2, SPHERE_DIAMETER)
    circle(trianglewidth / 2, trianglewidth / 2 + SPHERE_DIAMETER / 2, SPHERE_DIAMETER)

    translate(0, trianglewidth / 4)
    trianglewidth *= 1.5
    colorofcircle += 60
  }

}
