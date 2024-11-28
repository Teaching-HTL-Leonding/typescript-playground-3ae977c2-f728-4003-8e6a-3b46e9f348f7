function setup() {
    const SIZE = 400;
    const SIDE_LENGTH = 50;

    // We have an isosceles triangle ("gleichschenkeliges Dreieck").
    // This is the formula to calculate the height of such a triangle
    const HEIGHT = SIDE_LENGTH * Math.sqrt(3) / 2;

    createCanvas(SIZE, HEIGHT * 9);
    background("black");

    strokeWeight(1);
    stroke("yellow");
    noFill();

    for (let y = 0; y <= SIZE; y += SIDE_LENGTH) {
        push()

        for (let x = 0; x <= SIZE; x += SIDE_LENGTH) {
            triangle(0, SIDE_LENGTH, SIDE_LENGTH * 0.5, 0, SIDE_LENGTH, SIDE_LENGTH)
            translate(SIDE_LENGTH, 0)
        }
        pop()
        translate(0, HEIGHT);
    }
}
