function setup() {
    createCanvas(600, 400);
    background("black");
    noStroke();

    fill("yellow")
    rect(0, 0, width / 3, height * 0.75)

    fill("green")
    rect(width / 3, 0, width * 2 / 3, height * 0.75)

    fill("red")
    rect(width * 2 / 3, 0, width, height * 0.75)
}

mouseClicked() 

    let message: string

    if (mouseX < width / 3) {
        message = "Yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "Green"
    } else {
        message = "Red"
    }


