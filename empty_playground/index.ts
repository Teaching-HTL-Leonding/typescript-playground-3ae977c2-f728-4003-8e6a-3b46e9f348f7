function setup() {
    createCanvas(300, 300);
    background("gold")
}

function mouseClicked() {
    noStroke();
    fill("skyblue");
    circle(mouseX, mouseY, 10);

    fill("skyblue");
    noStroke();
    rect(0, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 5, height - 5);

}

function mouseMoved() {
    noStroke();
    fill("lime");
    circle (mouseX, mouseY, 10)
    rect(200, height - 20, width / 2, height);

    fill("black");
    text(`X: ${mouseX}, Y: ${mouseY}`, 200, height - 5);
}

