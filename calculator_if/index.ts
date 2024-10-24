const MARGIN_NUM = 10;

let num: number = 0;          // Current number entered by the user
let lineHeight: number = 0;   // Height of a line of the responsive layout
let cellWidth: number = 0;    // Width of a cell of the responsive layout

function setup() {
    createCanvas(400, 600);
    lineHeight = height / 5;
    cellWidth = width / 3;
}

function draw() {
    background("lightgray");

    fill("white");
    noStroke();
    rect(MARGIN_NUM, MARGIN_NUM, width - 2 * MARGIN_NUM, lineHeight - 2 * MARGIN_NUM);

    stroke("black");
    fill("black");
    textSize(55);
    textAlign(CENTER, CENTER)

    text('9', width / 3 * 2 + cellWidth / 2, lineHeight + lineHeight / 2);
    text('8', width / 3 + cellWidth / 2, lineHeight + lineHeight / 2);
    text('7', cellWidth / 2, lineHeight + lineHeight / 2);
    text('6', width / 3 * 2 + cellWidth / 2, lineHeight * 2.5)
    text('5', width / 3 + cellWidth / 2, lineHeight * 2.5)
    text('4', cellWidth / 2, lineHeight * 2.5)
    text('3', width / 3 * 2 + cellWidth / 2, lineHeight * 3.5)
    text('2', width / 3 + cellWidth / 2, lineHeight * 3.5)
    text('1', cellWidth / 2, lineHeight * 3.5)
    text('0', cellWidth, lineHeight * 4.5)
    text('C', width / 3 * 2 + cellWidth / 2, lineHeight * 4.5)

    strokeWeight(2);
    line(0, lineHeight, width, lineHeight);
    line(0, lineHeight * 2, width, lineHeight * 2)
    line(0, lineHeight * 3, width, lineHeight * 3)
    line(0, lineHeight * 4, width, lineHeight * 4)
    line(width / 3, height / 5, width / 3, height / 5 * 4)
    line(width / 3 * 2, height / 5, width / 3 * 2, lineHeight * 5)

}

function mouseClicked() {

}
