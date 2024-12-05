function setup() {
    createCanvas(601, 301);
    background("black");

    fill("aqua");
    noStroke();

    textSize(50);
    textAlign(CENTER, CENTER);
    text("Move the mouse to start", 0, 0, width, height);
}

function mouseMoved() {
    resetMatrix();
    background("black");
    strokeWeight(2);

    noFill();
    stroke("aqua");

    for (let i = 0; i < 601; i++) {
        push()
        for (let j = 0; j < 601; j++) {
            line(0, 0, 10, 5)
            line(10, 4.6, 0, 10 )
            translate(0, 10)
        }
        pop()
        translate(10, 0)
    }

    resetMatrix()
    fill("black")
    noStroke()
    rect(0, 260, 601, 50)

}
