function setup() {
    createCanvas(600, 400);
    background("black");
    noStroke();

    fill("yellow");
    rect(0, 0, width/3, height );

    fill("red");
    rect(width / 3, 0, width / 3, height);

    fill("green");
    rect(width / 3 * 2, 0, width / 3, height);

    
}

function mouseClicked() {
    fill("black");
    rect(0, height -height /3, width, height /3);


    fill("white");
    let message: string;

    if (mouseX < width / 3) {
        message = "Yellow"
    } else if (mouseX < width / 3 * 2) {
        message = "Red";
        
    } else {
        message = "Green";
    }
    textAlign(CENTER);
    textSize(40);
    text(message, width /2, height -20);
}