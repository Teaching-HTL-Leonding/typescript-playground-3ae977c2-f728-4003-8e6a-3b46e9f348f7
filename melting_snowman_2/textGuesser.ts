/** 
 * Get the initial value for currentWordStatus with underscores based on wordToGuess
 * 
 * @param wordToGuess Word to guess
 * 
 * @returns Initial value for currentWordStatus
 * 
 * This function must return a string with the same length as wordToGuess.
 * If a character in wordToGuess is a letter, the corresponding character
 * in the return value must be an underscore. If a character in wordToGuess
 * is a space, the corresponding character in the return value must be a space.
 */
function getInitialCurrentWord(wordToGuess: string): string {
    let result = ""

    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess[i] === " ") {
            result += " "
        } else {
            result += "_"
        }
    }
    return result;
}

/**
 * Handles a guess from a user
 * 
 * @param key Key that the user guessed
 * @param wordToGuess Word to guess
 * @param currentWordStatus Current word status
 * 
 * @returns New value for currentWordStatus
 * 
 * This function must return a new value for currentWordStatus based on the
 * key that the user guessed. If the key is in wordToGuess, the corresponding
 * characters in currentWordStatus must be revealed.
 */
function guessKey(key: string, wordToGuess: string, currentWordStatus: string): string {
    let result = "";

    for (let i = 0; i < wordToGuess.length; i++) {
        if (wordToGuess.toLowerCase()[i] === key.toLowerCase()) {
            result += wordToGuess[i]
        } else {
            result += currentWordStatus[i]
        }
    }

    return result; // Placeholder, remove this line once you added your code
}

/**
 * Draws the result text
 * 
 * @param win False if the user has reached 10 wrong guesses, otherwise true
 * 
 * Draws the result text on the screen. If the user has lost (10 wrong guesses),
 * the text must be "Game Over" in red.
 * 
 * If the user has guessed the word correctly, the text must be:
 * 
 * * "No wrong guesses!" if number of wrong guesses is zero.
 * * "One wrong guess!" if number of wrong guesses is one.
 * * "n wrong guesses" otherwise ("n" is number of wrong guesses).
 */
function drawResult(win: boolean, wrongGuesses: number) {
    if (win) {
        fill("red");
        textSize(35);
        text("Game Over !", width / 5, height / 2);
    } else if (wrongGuesses === 0) {
        fill("green");
        textSize(35);
        text("No wrong guesses", width / 5, height / 2);
    } else if (wrongGuesses === 1) {
        fill("green");
        textSize(35);
        text("One wrong guess", width / 6, height / 2);
    } else {
        fill("green");
        textSize(35);
        text(`${wrongGuesses} wrong guesses`, width / 6, height / 2);
    }
}