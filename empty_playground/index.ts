function setup() {
    createCanvas(400, 400);
    background("black");

    let firstrandumnum = Math.floor(random(0, 100));
    let secondrandomnum = Math.floor(random(0, 100));
    let thirdrandomnum = Math.floor(random(0, 100));
    let num4 = Math.floor(random(0, 100));
    let num5 = Math.floor(random(0, 100));
    let operator = Math.floor(random(1, 4));
    let correctAnswer = 0

    fill("yellow");

    textAlign(CENTER, LEFT);
    textSize(55);
    text(`${firstrandumnum}`, width / 6, height / 2);
    text(`${secondrandomnum}`, width / 2, height / 2);
    text(`${thirdrandomnum}`, width - 35, height / 2);

    textAlign(CENTER, RIGHT);
    textSize(55);

    text(`${num4}`, width / 4, height / 5);
    text(`${num5}`, width / 4 * 3, height / 5);

    if (operator === 1) {
        text('+', width / 2, height / 6)
    } else if (operator === 2) {
        text('-', width / 2, height / 6)
    } else {
        text('*', width / 2, height / 6)
    }

    if (operator === 1) {
        if (correctAnswer === 1) {
            firstrandumnum = num4 + num5
        } if (correctAnswer === 2) {
            secondrandomnum = num4 + num5
        } else {
            thirdrandomnum = num4 + num5
        }
    }


    if (operator === 2) {
        if (correctAnswer === 1) {
            firstrandumnum = num4 - num5
        } if (correctAnswer === 2) {
            secondrandomnum = num4 - num5
        } else {
            thirdrandomnum = num4 - num5
        }
    }

    if (operator === 3) {
        if (correctAnswer === 1) {
            firstrandumnum = num4 * num5
        } if (correctAnswer === 2) {
            secondrandomnum = num4 * num5
        } else {
            thirdrandomnum = num4 * num5
        }
    }
}

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
