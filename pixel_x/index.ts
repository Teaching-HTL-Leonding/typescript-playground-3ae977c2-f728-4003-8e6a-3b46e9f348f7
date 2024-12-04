function setup() {
    const SIZE = 425;
    const GRID = 25;

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    fill("yellow")

    translate(GRID, GRID)
    for (let i = 0; i < 15; i++) {
        rect(0, 0, GRID, GRID)
        translate(GRID, GRID)
    }

    resetMatrix()
    fill("lime")
    translate(GRID, SIZE - GRID - GRID)
    for (let i = 0; i < 15; i++) {
        rect(0, 0, GRID, GRID)
        translate(GRID, -GRID)
    }


}
