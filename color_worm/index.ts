function setup() {
    createCanvas(500, 500);
    colorMode(HSB);
    background(0);
    noStroke();

}

let color_hue: number = 0;

function mouseMoved() {
    fill(color_hue, 100, 100);
    circle(mouseX, mouseY, 40);
}
