function setup() {
  createCanvas(600, 600);
  background("lightblue");

}



function mouseClicked() {

  background("lightblue")

  fill("black")
  let x: number = Math.round(mouseX) * 1
  let y: number = Math.round(mouseY) * 1

  text(`X: ${x}, Y: ${y}`, 30, height - 550);

  circle(mouseX, mouseY, 25)

  let x1: number = Math.round(mouseX) * 1
  let y1: number = Math.round(mouseY) * 1

  text(`X: ${x}, Y: ${y}`, 150, height - 550);

}




