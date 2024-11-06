let guessedDigit1 = 0;
let guessedDigit2 = 0;
let guessedDigit3 = 0;
let guessedDigit4 = 0;
let num = 0;

function setup() {
  num = Math.floor(random(0, 16));

  createCanvas(600, 400)
  background("black")

  noFill()
  stroke("Yellow")
  rect(100, 100, 600 / 9, 400 / 3)
  rect(200, 100, 600 / 9, 400 / 3)
  rect(300, 100, 600 / 9, 400 / 3)
  rect(400, 100, 600 / 9, 400 / 3)

  textAlign(CENTER, CENTER)
  fill("Yellow")
  noStroke()
  textSize(30)
  text(`${num} in binary?`, width / 2, height / 6)

  text(guessedDigit4, 100, 100, 600 / 9, 400 / 3)
  text(guessedDigit3, 200, 100, 600 / 9, 400 / 3)
  text(guessedDigit2, 300, 100, 600 / 9, 400 / 3)
  text(guessedDigit1, 400, 100, 600 / 9, 400 / 3)



}


function mouseClicked() {
  if (mouseY > 100 && mouseY < 400 / 3 + 100) {

    if (mouseX > 100 && mouseX < 100 + 600 / 9) {
      if (guessedDigit4 === 1) {
        guessedDigit4 = 0
      } else {
        guessedDigit4 = 1
      }
    }

    if (mouseX > 200 && mouseX < 200 + 600 / 9) {
      if (guessedDigit3 === 1) {
        guessedDigit3 = 0
      } else {
        guessedDigit3 = 1
      }
    }
    if (mouseX > 300 && mouseX < 300 + 600 / 9) {
      if (guessedDigit2 === 1) {
        guessedDigit2 = 0
      } else {
        guessedDigit2 = 1
      }
    }
    if (mouseX > 400 && mouseX < 400 + 600 / 9) {
      if (guessedDigit1 === 1) {
        guessedDigit1 = 0
      } else {
        guessedDigit1 = 1
      }
    }
  }

  let guessedNumber = guessedDigit4 * Math.pow(2, 3);
  guessedNumber += guessedDigit3 * Math.pow(2, 2);
  guessedNumber += guessedDigit2 * Math.pow(2, 1);
  guessedNumber += guessedDigit1 * Math.pow(2, 0);

  background("black")
  noFill()
  stroke("Yellow")
  rect(100, 100, 600 / 9, 400 / 3)
  rect(200, 100, 600 / 9, 400 / 3)
  rect(300, 100, 600 / 9, 400 / 3)
  rect(400, 100, 600 / 9, 400 / 3)

  textAlign(CENTER, CENTER)
  fill("Yellow")
  noStroke()
  textSize(30)
  text(`${num} in binary?`, width / 2, height / 6)

  text(guessedDigit4, 100, 100, 600 / 9, 400 / 3)
  text(guessedDigit3, 200, 100, 600 / 9, 400 / 3)
  text(guessedDigit2, 300, 100, 600 / 9, 400 / 3)
  text(guessedDigit1, 400, 100, 600 / 9, 400 / 3)

  if (guessedNumber = num) {
    text("CORRECT!", width / 2, 300)
  }


}


