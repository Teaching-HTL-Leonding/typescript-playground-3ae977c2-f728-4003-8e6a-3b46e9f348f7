
function setup() {
    createCanvas(400, 400);
    background("black");

    let num1 = Math.floor(random(0, 100));
    let num2 = Math.floor(random(0, 100));
    let num3 = Math.floor(random(0, 100));
    let num4 = Math.floor(random(0, 100));
    let num5 = Math.floor(random(0, 100));
    let operator = Math.floor(random(1, 4));
    let correctAnswer = 1
    let placeofnum = Math.floor(random(1, 4));


    fill("yellow");

    textAlign(CENTER, LEFT);
    textSize(55);
    text(`${num1}`, width / 6, height / 2);
    text(`${num2}`, width / 2, height / 2);

    textAlign(CENTER, RIGHT);
    textSize(55);
    text(`${num5}`, width - 35, height / 2);

    text(`${num3}`, width / 4, height / 5);
    text(`${num4}`, width / 4 * 3, height / 5);

    text(`${num3}`, width / 4, height / 5);
    text(`${num4}`, width / 4 * 3, height / 5);

    if (operator === 3) {
        correctAnswer = num4 + num3
    }

    if (operator === 2) {
        correctAnswer = num4 - num3
    }

    if (operator === 1) {
        correctAnswer = num4 * num3
    }
  if (operator === 1) {
        text('+', width / 4 * 2, height / 5);
    } else if (operator === 2) {
        text('-', width / 4 * 2, height / 5);
    } else {
        text('*', width / 4 * 2, height / 5);
    }

}




// mouseClicked function checks if the user clicked on the correct answer
function mouseClicked() {

}

// mouseMoved function displays mouse coordinates as feedback
function mouseMoved() {
    // This is a HELPER FUNCTION. It should make finding coordinates
    // easier for you. You DO NOT NEED to change this method!

    fill("black");
    noStroke();
    rect(0, height - 20, width, height); // Draws a rectangle to clear previous coordinates

    fill("white");
    textSize(10);
    textAlign(LEFT, BOTTOM); // Aligns coordinates text to bottom-left
    text(`${mouseX}/${mouseY}`, 5, height - 5); // Displays current mouse coordinates
}
