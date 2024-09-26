function setup() {
  createCanvas(600, 600);
  background("lightblue");
}

function mouseMoved() {
  const snap = 40; // marker must snap every 40 pixels
  const markerSize = 10; // size of marker

  let x: number=Math.round(mouseX / 40)*40
  let y: number=Math.round(mouseY / 40)*40

  background("lightblue")

  rect(x, y, 25, 2);
  strokeWeight(2);
  stroke("white");

  fill("black");
  text(`X: ${x}, Y: ${y}`, 200, height - 5);


  rect(x, y, 2, 25, 2);
  rect(x, y, 2, -25, 2);
  rect(x, y, -25, 2);








}
