function setup() {
    createCanvas(500, 500);
}



let x = 0;

function draw() {
    background("skyblue");
    fill ("yellow");
    circle(x, 100, 50);
    x += 2;
}