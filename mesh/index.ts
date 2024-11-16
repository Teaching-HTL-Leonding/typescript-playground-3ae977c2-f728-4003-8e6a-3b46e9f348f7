const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.
                  // This is also the distance between the rays.

function setup() {
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke("lime");

  line(MARGIN, MARGIN, SIZE - MARGIN, MARGIN)

  let i = MARGIN
  while(i <= SIZE - MARGIN) {
    line(MARGIN, i, SIZE - MARGIN, MARGIN)
    i += MARGIN
  }
  
}
