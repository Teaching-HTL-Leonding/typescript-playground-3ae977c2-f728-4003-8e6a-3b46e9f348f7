let num = 0;
const guessednum1 = 0
const guessednum2 = 0
const guessednum3 = 0
const guessednum4 = 0



function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(600, 400);
  background("black");

  fill("yellow")
  textAlign(CENTER, CENTER)
  textSize(35)

  text(`${num} in binary?`, width / 2, 50)

  noFill()
  stroke("yellow")
  rect(width / 6, height / 3, width / 9, height / 3)
  rect(width / 6 * 2, height / 3, width / 9, height / 3)
  rect(width / 6 * 3, height / 3, width / 9, height / 3)
  rect(width / 6 * 4, height / 3, width / 9, height / 3)


}

function mouseClicked() {
  // <<< Add your code here
}
