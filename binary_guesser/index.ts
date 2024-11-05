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
  rect(width / 6, height / 3, width / 9, height / 3)
  rect(width / 6 * 2, height / 3, width / 9, height / 3)
  rect(width / 6 * 3, height / 3, width / 9, height / 3)
  rect(width / 6 * 4, height / 3, width / 9, height / 3)

  textAlign(CENTER, CENTER)
  fill("Yellow")
  textSize(25)
  text(guessedDigit1, width / 6, height / 3, width / 9, height / 3)
  text(guessedDigit2, width / 6 * 2, height / 3, width / 9, height / 3)
  text(guessedDigit3, width / 6 * 3, height / 3, width / 9, height / 3)
  text(guessedDigit4, width / 6 * 4, height / 3, width / 9, height / 3)

  textAlign(CENTER, CENTER)
  fill("Yellow")
  noStroke()
  textSize(25)
  text(`${num} in binary?`, width / 2, height / 6)


}

function mouseClicked() {


  if (mouseX > width / 6 * 4 && mouseX < width / 9) {
    if (guessedDigit4 === 1) {
      guessedDigit4 = 0;
    } else {
      guessedDigit4 = 1;
    }
  }

  if (mouseX > width / 6 * 3 && mouseX < width / 9) {
    if (guessedDigit3 === 1) {
      guessedDigit3 = 0;
    } else {
      guessedDigit3 = 1;
    }
  }

  if (mouseX > width / 6 * 2 && mouseX < width / 9) {
    if (guessedDigit2 === 1) {
      guessedDigit2 = 0;
    } else {
      guessedDigit2 = 1;
    }
  }

}
if (mouseX > width / 6 && height / 9) {
  if (guessedDigit1 === 1) {
    guessedDigit1 = 0;
  } else {
    guessedDigit1 = 1;
  }
}

let guessedNumber = guessedDigit4 * Math.pow(2, 3);
guessedNumber += guessedDigit3 * Math.pow(2, 2);
guessedNumber += guessedDigit2 * Math.pow(2, 1);
guessedNumber += guessedDigit1 * Math.pow(2, 0);



if (guessedNumber === num) {

  
}
fill("black");
stroke("yellow");

rect(width / 6, height / 3, width / 9, height / 3)
rect(width / 6 * 2, height / 3, width / 9, height / 3)
rect(width / 6 * 3, height / 3, width / 9, height / 3)
rect(width / 6 * 4, height / 3, width / 9, height / 3)

textAlign(CENTER, CENTER);
fill(color);
noStroke();
textSize(30);
text(guessedDigit1, width / 6, height / 3, width / 9, height / 3)
text(guessedDigit2, width / 6 * 2, height / 3, width / 9, height / 3)
text(guessedDigit3, width / 6 * 3, height / 3, width / 9, height / 3)
text(guessedDigit4, width / 6 * 4, height / 3, width / 9, height / 3)

if (guessedNumber === num) {
  text("Correct!", width / 2, 220);
}



