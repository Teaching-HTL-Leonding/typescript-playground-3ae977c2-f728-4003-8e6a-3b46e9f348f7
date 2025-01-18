const CONFIGURATION = "2;150-200.";

let lineStartX: number[] = [];     // Start coordinates of line
let lineStartY: number[] = [];
let lineEndX: number[] = [];       // End coordinates of line
let lineEndY: number[] = [];
let lineColor: number[] = [];

let lineStartDx: number[] = [];    // Movement of start point per frame in X and Y direction
let lineStartDy: number[] = [];
let lineEndDx: number[] = [];      // Movement of end point per frame in X and Y direction
let lineEndDy: number[] = [];

let minColor = 0;               // Lower bound of random hue value
let maxColor = 360;

let amountOfLines
let lines: number[] = [];

// Upper bound of random hue value

function setup() {
    createCanvas(500, 500);
    colorMode(HSB);

    let num = 0;
    for (let i = 0; i < CONFIGURATION.length; i++) {
        if (CONFIGURATION[i] === "-") {
            minColor = num
            console.log(minColor)
            num = 0

        } else if (CONFIGURATION[i] === ".") {
            maxColor = num
            console.log(maxColor)
            num = 0

        } else if (CONFIGURATION[i] === ";") {
            amountOfLines = num
            num = 0
        } else {
            num = num * 10 + parseInt(CONFIGURATION[i].trim());
        }
    }

    // Set random start and end position
    for (let i = 0; i < amountOfLines; i++) {

        lineStartX.push(random(50, 450));
        lineStartY.push(random(50, 450));
        lineEndX.push(random(50, 450));
        lineEndY.push(random(50, 450));

        // Set random movement
        lineStartDx.push(random(0, 5));
        lineStartDy.push(random(0, 5));
        lineEndDx.push(random(0, 5));
        lineEndDy.push(random(0, 5));

        // Set random color
        lineColor.push(random(minColor, maxColor));
    }

}


function draw() {
    background("black");

    for (let i = 0; i < amountOfLines; i++) {
        push();
        stroke(lineColor[i], 100, 100);
        strokeWeight(2);
        line(lineStartX[i], lineStartY[i], lineEndX[i], lineEndY[i]);

        lineStartX[i] += lineStartDx[i];
        lineStartY[i] += lineStartDy[i];
        lineEndX[i] += lineEndDx[i];
        lineEndY[i] += lineEndDy[i];

        if (lineStartX[i] < 0 || lineStartX[i] > width) {
            lineStartDx[i] = -lineStartDx[i];
        }
        if (lineStartY[i] < 0 || lineStartY[i] > height) {
            lineStartDy[i] = -lineStartDy[i];
        }

        if (lineEndX[i] < 0 || lineEndX[i] > width) {
            lineEndDx[i] = -lineEndDx[i];
        }
        if (lineEndY[i] < 0 || lineEndY[i] > height) {
            lineEndDy[i] = -lineEndDy[i];
        }

        pop();
    }

    fill("white");
    noStroke();
    rect(20, 20, 50, 50);
    rect(80, 20, 50, 50);

    fill("black");
    textSize(50);
    text("+", 30, 60);
    text("-", 95, 60);
}

function mouseClicked() {

    if (mouseX > 20 && mouseX < 70) {
        if (mouseY > 20 && mouseY < 70) {

            amountOfLines++
            lineStartX.push(random(50, 450));
            lineStartY.push(random(50, 450));
            lineEndX.push(random(50, 450));
            lineEndY.push(random(50, 450));

            lineStartDx.push(random(0, 5));
            lineStartDy.push(random(0, 5));
            lineEndDx.push(random(0, 5));
            lineEndDy.push(random(0, 5));
            lineColor.push(random(minColor, maxColor));
        }
    }

    if (mouseX > 80 && mouseY < 130) {
        if (mouseY > 20 && mouseY < 70) {

            amountOfLines--
            lineStartX.splice(0, 1)
            lineStartY.splice(0, 1)
            lineEndX.splice(0, 1);
            lineEndY.splice(0, 1);

            lineStartDx.splice(0, 1);
            lineStartDy.splice(0, 1);
            lineEndDx.splice(0, 1);
            lineEndDy.splice(0, 1);
            lineColor.splice(0, 1);
        }
    }
}