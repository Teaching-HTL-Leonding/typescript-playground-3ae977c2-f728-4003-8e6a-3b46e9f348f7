const SIZE = 400;  // Canvas size (square)
const MARGIN = 25; // Margin between the edges and the rays.
                   // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");
}

function mouseMoved() {
  background("black");
  strokeWeight(2);
  
  let i = MARGIN
  while(i < SIZE - MARGIN) {
    stroke("lime")
    line(MARGIN, i, mouseX, mouseY)
    line(SIZE - MARGIN, i, mouseX, mouseY)

    stroke("blue")
    line(i, MARGIN, mouseX, mouseY)
    line(i, SIZE - MARGIN, mouseX, mouseY)
    i += MARGIN
  }

}
