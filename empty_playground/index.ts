function setup() {
    createCanvas(250, 250)
    background("black")

    strokeWeight(1)
    colorMode(RGB)
    strokeCap(SQUARE)

    let y = 225
    while (y >= 25) {
        stroke(y, 100, 100)
        line(25, y, y, 225)
        line(y, 25, 225, y)

        y -= 0.5
    }

}


function draw() {
}