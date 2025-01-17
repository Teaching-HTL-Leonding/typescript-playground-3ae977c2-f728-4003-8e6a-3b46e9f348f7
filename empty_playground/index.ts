function setup() {
    createCanvas(500, 500)
    background("black")

    for (let i = 0; i < 3; i++) {
        drawCircle("yellow", "red")
    }
}

function mouseClicked() {
    drawCircle("lime", "aqua")
}

function drawCircle(color: string, colorstroke: string) {
    stroke(colorstroke)
    strokeWeight(10)
    fill(color)
    let x = random(0, 400)
    let y = random(0, 400)
    let diameter = random(50, 250)
    //console.info(x, y, diameter)
    circle(x, y, diameter)
}