function setup() {
    createCanvas(600, 400);
    background("black");
    noStroke();


    fill("yellow")
    rect(0, 0, width / 2, height / 2)

    fill("green")
    rect(width / 2, 0, width / 2, height / 2)

    fill("black")
    rect(width / 4, height / 4, width * 0, 75, height * 0, 75)

    fill("blue")
    rect(0, height / 2, width / 2, height / 2)

    fill("red")
    rect(width / 2, height / 2, width / 2, height / 2)

    fill("black")
    rect(width / 4, height / 3, width * 0.5, height / 3)

}

function mouseClicked() {

    fill("black")
    rect(width / 4, height / 3, width * 0.5, height / 3)

    fill("white")
    let message: string

    if (mouseX < width / 2 && mouseY < height / 2) {
        message = "Yellow"
    } else if (mouseX < width / 2 && mouseY < height) {
        message = "Blue"
    } else if (mouseX < width && mouseY < height / 2) {
        message = "Green"
    } else {
        message = "Red"
    }
    textAlign(CENTER);
    textSize(40);
    text(message, width / 2, height / 2);

}