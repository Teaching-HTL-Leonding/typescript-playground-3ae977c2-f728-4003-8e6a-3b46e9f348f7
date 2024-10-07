function setup() {
    createCanvas(600, 600);
    background("black");
    angleMode(DEGREES);
}

function mouseMoved() {
    background("black");
    let x: number = width * 0.5;
    let y: number = height * 0.5;
    let xdurchmesser: number = (mouseX - x) * 2;
    let ydurchmesser: number = (mouseY - y) * 2;

    let xabstandr: number = Math.round(xdurchmesser / 20) * 20;
    let yabstandr: number = Math.round(ydurchmesser / 20) * 20;

    noFill();
    stroke("white");
    ellipse(x, y, xabstandr, yabstandr);

    line(x - xabstandr / 2, y, x + xabstandr / 2, y);
    line(x, y - yabstandr / 2, x, y + yabstandr / 2);

    noStroke();
    fill("white");
    let flache = Math.round(xabstandr * yabstandr * Math.PI);
    text(`Fläche: ${Math.abs(flache)}`, 10, height - 10);

    

    let texty = (y - yabstandr / 2) - 5;
    let textx = (x + xabstandr / 2) - 25;

    
    
}
