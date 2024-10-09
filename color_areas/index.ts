function setup() {
    createCanvas(600, 600);
    background("black");
    noStroke();

    fill("yellow")
    rect(0, 0, width /3, height *0.75)

    fill("green")
    rect(width /3, 0, width /3, height *0.75)

    fill("red")
    rect(width * 2/3, 0, width /3, height *0.75)

    
}

function mouseClicked() {

let message: string

if(mouseX < width / 3) {
    message = "yellow"
} else if (mouseX < width / 3 * 2) {
message = "Green"
} else {
    message = "Red"
 }
 fill("white")
 
}
