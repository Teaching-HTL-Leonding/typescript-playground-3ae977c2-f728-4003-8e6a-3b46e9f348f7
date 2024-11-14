const SIZE = 400;    // Canvas size (square)
let rayColor = 0
const MARGIN = 25; // Margin between the edges and the rays.
// This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);

  // <<< Add your code here
  let i = MARGIN;
  while (i <= SIZE - MARGIN) {
    rayColor = (rayColor + 0.25) % 360
    stroke(rayColor, 100, 100);
    line(MARGIN, i, mouseX, mouseY);
    line(width - MARGIN, i, mouseX, mouseY);

    stroke(rayColor, 100, 100);
    line(i, MARGIN, mouseX, mouseY);
    line(i, height - MARGIN, mouseX, mouseY);

    i += MARGIN;
  }
}
