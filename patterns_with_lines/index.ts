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
    colorMode(HSB);
    let colorOfLines = 0;
    let sizeofpatter = 10;
    resetMatrix();
    background("black");
    strokeWeight(2);
    noFill();

    for (let i = 0; i < 601; i++) {
        push();
        for (let j = 0; j < 601; j++) {
            stroke(colorOfLines, 100, 100);
            line(0, 0, sizeofpatter, 5);
            line(10, 4.6, 0, sizeofpatter);
            translate(0, sizeofpatter);
        }
        pop();
        translate(10, 0);
        colorOfLines += 6;
    }

    resetMatrix();
    fill("black");
    noStroke();
    rect(0, 260, 601, 50);

    const inpercent = Math.floor(mouseX * 100 / 601) + 100;
    textAlign(CENTER, LEFT);
    textSize(15);
    fill("white");
    text(`${mouseX} of 601 =`, 50, 280);
    text(`${inpercent} %`, 120, 280);

}
