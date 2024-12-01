function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();

    let i = 0;
    while (i < 64) {
        const row = Math.floor(i / 8);
        const col = i % 8;
        if ((row % 2 === 0 && col % 2 === 1) || (row % 2 === 1 && col % 2 === 0)) {
            fill("brown");
        } else {
            fill("lightyellow");
        }

       rect(SQUARE_SIZE + col * SQUARE_SIZE, SQUARE_SIZE + row * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE);
        i++;
    }

    
}
