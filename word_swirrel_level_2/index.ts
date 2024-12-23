const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 50;

const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");
  textAlign(CENTER, CENTER);
  colorMode(HSB);
  angleMode(DEGREES);

  // <<< Add your code here
}

function guess(textInput: string) {
  fill("white");

  if (textInput === wordToGuess) {
    background("green");
    textSize(75);
    text("Correct!", WIDTH / 2, HEIGHT / 2);
  } else {
    background("red");
    textSize(50);
    text(`Wrong!\nIt was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2);
  }
}
