const SIZE = 400;  // Canvas size (square)
const MARGIN = 50; // Margin between the edges and the rays.

                  // This is also the distance between the rays.

function setup() {
  let color1 = 0
  colorMode(HSB)
  createCanvas(SIZE, SIZE);
  background("black");

  strokeWeight(1);
  stroke(color1, 100, 100);

  let i = MARGIN
  while (i <= SIZE - MARGIN) {
    point(MARGIN, i)
    
    let j = MARGIN
     while (j <= SIZE - MARGIN) {
      line(MARGIN, i, SIZE - MARGIN, j)
      j += MARGIN
     }
    i += MARGIN 
    color1 += 60
  }
}
