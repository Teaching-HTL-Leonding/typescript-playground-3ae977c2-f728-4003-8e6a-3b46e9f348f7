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

  for (let i = 0; i < wordToGuess.length; i++) {
    const x = random(MARGIN, WIDTH - MARGIN);
    const y = random(MARGIN, HEIGHT - MARGIN);
    const size = random(50, 150);
    const color = random(0, 360);
    const angle = random(-90, 90);
    
    push();
    translate(x, y);
    rotate(angle);
    fill(color, 100, 100);
    textSize(size);
    text(wordToGuess[i], 0, 0);
    pop();

  }
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
