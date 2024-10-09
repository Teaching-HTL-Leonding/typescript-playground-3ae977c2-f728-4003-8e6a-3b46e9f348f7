function setup() {
    createCanvas(600, 400);
    background("black");
    noStroke();

    fill("yellow")
    rect(0, 0, width /2, height /2 )

    fill("green")
    rect(width /2, 0, width /2, height /2)

    fill("blue")
    rect(0, height /2, width /2, height /2)

    fill("red")
    rect(width /2, height /2, width /2, height /2)
}


