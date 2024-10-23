const TEXT_LEFT = 30;
const STONE_LEFT = 50;
const PAPER_LEFT = 175;
const SCISSORS_LEFT = 300;
const ICON_WIDTH = 100;
const ICON_TOP = 75;
const ICON_HEIGHT = 100;

function setup() {
    createCanvas(500, 490);
    background("black");

    fill("yellow");
    textSize(30);
    text("Human:", TEXT_LEFT, 50);

    // Display the icons for "stone", "paper", and "scissors".
    textSize(75);
    const symbol = 150;
    text("🪨", STONE_LEFT, symbol);
    text("📃", PAPER_LEFT, symbol);
    text("✂️", SCISSORS_LEFT, symbol);
}


function mouseMoved() {

    noFill();
    strokeWeight(3);

    const positionOfMouse = mouseY >= ICON_TOP && mouseY < ICON_TOP + ICON_HEIGHT;

    if (positionOfMouse && mouseX >= STONE_LEFT && mouseX < STONE_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }

    rect(STONE_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    if (positionOfMouse && mouseX >= PAPER_LEFT && mouseX < PAPER_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(PAPER_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);

    if (positionOfMouse && mouseX >= SCISSORS_LEFT && mouseX < SCISSORS_LEFT + ICON_WIDTH) {
        stroke("yellow");
    } else {
        stroke("black");
    }
    rect(SCISSORS_LEFT, ICON_TOP, ICON_WIDTH, ICON_HEIGHT);
}


