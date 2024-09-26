function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  background("lightblue")

  rect(mouseX, mouseY, 25, 2);
  strokeWeight(2);
  stroke("white");

  text(`X: ${mouseX}, Y: ${mouseY}`, 200, -5);
  strokeWeight(3)
  stroke("with")


  rect(mouseX, mouseY, 2, 25, 2)
  rect(mouseX, mouseY, 2, -25, 2)
  rect(mouseX, mouseY, -25, 2)







}
