function setup() {
    createCanvas(500, 500);
}



let x = 0;
let direction = 1000;

function draw() {
    background("skyblue");
    fill("yellow");
    circle(width / 2, height / 2, x);
    x += direction;
    if (x >= width) {
        direction = -1000
    }

    if (x <= 0) {
        direction = 1000
    }
}