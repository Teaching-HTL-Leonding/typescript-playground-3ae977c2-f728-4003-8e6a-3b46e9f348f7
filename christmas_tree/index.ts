const TOP_MARGIN = 80;
const SPHERE_DIAMETER = 30;
const INITIAL_TRIANGLE_BASE_WIDTH = 100;
const SIZE_INCREASE_BY_LAYER = 0.5;
const HEIGHT_TO_WIDTH_RATIO = 0.5;
const NUMBER_OF_LAYERS = 4;
const TRUNK_WIDTH = 50;
const TRUNK_HEIGHT = 50;
const SIZE = 500

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
  fill("green");
  noStroke();

  
  for(let i = INITIAL_TRIANGLE_BASE_WIDTH; i <= SIZE / 1.85; i *= 1.5) {
    triangle(SIZE / 2 - 70, i * 2, SIZE / 2, 80, SIZE / 2 + 70, i * 2)
  }
}
