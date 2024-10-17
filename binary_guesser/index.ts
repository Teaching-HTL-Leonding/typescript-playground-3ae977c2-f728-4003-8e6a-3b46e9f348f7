let num = 0;
const digit1 = 0


function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(600, 400);
  background("black");

  fill("yellow")
  textSize(40);
  text(num, width / 2, height / 5);
  text(0, width / 7, height / 2, width / 6, height / 2);
  text(0, width / 7 * 2.5, height / 2, width / 6, height / 2);
  text(0, width / 7 * 4, height / 2, width / 6, height / 2);
  text(0, width / 7 * 5.5, height / 2, width / 6, height / 2)

  stroke("yellow")
  strokeWeight(2)
  noFill()
  rect(width / 8, height / 3, width / 7, height / 3);
  rect(width / 8 * 2.5, height / 3, width / 7, height / 3);
  rect(width / 8 * 4, height / 3, width / 7, height / 3);
  rect(width / 8 * 5.5, height / 3, width / 7, height / 3)



}

function mouseClicked() {
  if (mouseX > width / 8 && mouseX < width / 8 + width / 7 && mouseY > height / 3 && mouseY < height / 3 + height / 3) {
    text("1", width / 7, height / 2, width / 6, height / 2)
  }
}

