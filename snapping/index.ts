function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

rect(mouseX, mouseY, 60, 2);
  strokeWeight(2);
  fill("black")

  rect(mouseX, mouseY, 2, 60, 2 )
  rect(mouseX, mouseY, 2, -60, 2 )
  rect(mouseX, mouseY, -60, 2 )

  

  
}
