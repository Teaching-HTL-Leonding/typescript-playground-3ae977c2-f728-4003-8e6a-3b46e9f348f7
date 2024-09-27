function setup() {
    createCanvas(400, 400);
}

let x: number = 0;

function draw() {
    background("yellow");

    x = x+1
    circle(x, 150, 50);

}
