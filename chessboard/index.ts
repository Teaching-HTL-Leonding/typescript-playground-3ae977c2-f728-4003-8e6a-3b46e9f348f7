function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = SQUARE_SIZE
    
    while(i < SIZE - SQUARE_SIZE) {
        fill("beige")
        rect(SQUARE_SIZE, i, SQUARE_SIZE, i)
        i += SQUARE_SIZE
        fill("brown")
        rect(SQUARE_SIZE, i, SQUARE_SIZE, i)
        i += SQUARE_SIZE
        let v = SQUARE_SIZE
        fill("beige")
        rect(v, i, v, i)
        v += SQUARE_SIZE
        fill("brown")
        rect(v, i, v, i)
        v += SQUARE_SIZE
    }
    
}
