function setup() {
    const SIZE = 500; // Canvas size
    const SQUARE_SIZE = 50; // Size of a chess board square

    createCanvas(SIZE, SIZE);
    background("black");

    noStroke();
    fill("white")
    translate(SQUARE_SIZE, SQUARE_SIZE)

    for (let i = 0; i < 64; i++) {
        const row = Math.floor((i) / 8)

        if ((i) % 8 === 0) {
            fill("white")
            text(8 - row, -SQUARE_SIZE / 2, SQUARE_SIZE / 2)

        }
        let isbrown = i % 2 === 0

        if (row % 2 === 0) {
            isbrown = !isbrown
        }

        if (isbrown) {
            fill("brown")
        } else {
            fill("white")
        }

        rect(0, 0, SQUARE_SIZE, SQUARE_SIZE)
        translate(SQUARE_SIZE, 0)
        if ((i + 1) % 8 === 0) {
            translate(- SQUARE_SIZE * 8, SQUARE_SIZE)

        }
    }
    translate( 0.5 * SQUARE_SIZE, SQUARE_SIZE * 0.5)

    for (let i = 0; i < 8; i++) {
        
        const column = i
        text(String.fromCharCode(i + 'a'.charCodeAt(0)), 0, 0)
        translate(SQUARE_SIZE, 0)
    }

}
