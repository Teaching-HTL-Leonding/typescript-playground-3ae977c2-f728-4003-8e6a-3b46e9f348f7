const WIDTH = 500;
const HEIGHT = 300;

// Enter the word to guess here.
//                   vvv
//                   vvv
const wordToGuess = "apple";

function setup() {
  createCanvas(WIDTH, HEIGHT);
  background("black");

  let wordToScramble = wordToGuess;
  let scrambleWord = "";

  while (wordToScramble.length > 0) {
    let letterIndex = Math.floor(random(wordToScramble.length))
    scrambleWord += wordToScramble[letterIndex]
    wordToScramble = wordToScramble.substring(0, letterIndex)
      + wordToScramble.substring(letterIndex + 1)
  }

  textAlign(CENTER, CENTER)
  fill("white")
  textSize(75)
  text(scrambleWord, WIDTH / 2, HEIGHT / 2)
}

// This method will be called automatically when the user clicks "Guess".
// The guessed text will be in "textInput".
function guess(textInput: string) {
  fill("white")

  if (textInput === wordToGuess) {
    background("green")
    textSize(75)
    text("Correct!", WIDTH / 2, HEIGHT / 2)
  } else {
    background("red")
    textSize(50)
    text(`Wrong!/It was "${wordToGuess}"`, WIDTH / 2, HEIGHT / 2)
  }
}
