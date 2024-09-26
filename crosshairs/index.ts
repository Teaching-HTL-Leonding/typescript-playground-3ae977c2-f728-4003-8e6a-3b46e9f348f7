function setup() {
  createCanvas(600, 600);
  background("lightblue")
}

function mouseMoved() {
  

  
  background("lightblue");
  noFill();
  circle(mouseX, mouseY, 60);

  circle(mouseX, mouseY, 30);

  rect(mouseX, mouseY, 60, 2);
  strokeWeight(2);
  fill("black")

  rect(mouseX, mouseY, 2, 60, 2 )
  rect(mouseX, mouseY, 2, -60, 2 )
  rect(mouseX, mouseY, -60, 2 )



}
