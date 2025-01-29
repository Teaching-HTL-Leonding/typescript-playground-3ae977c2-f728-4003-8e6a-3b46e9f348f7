let nextFace = true

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(true);
}

function mouseClicked() {

  smile(nextFace)
  nextFace = !nextFace

}

function smile(happy: boolean) {
  const x = random(1, 500)
  const y = random(1, 500)


  push()
  translate(x, y)

  scale(0.2)

  if (nextFace === true) {
    stroke("black");
    strokeWeight(10);
    fill("yellow");

    circle(200, 200, 375);

    fill("black");
    circle(125, 125, 20);
    circle(275, 125, 20);

    noFill();
    arc(200, 250, 200, 150, 50, 150);
  } else {
    stroke("black");
    strokeWeight(10);
    fill("lime");

    circle(200, 200, 375);

    fill("black");
    circle(125, 125, 20);
    circle(275, 125, 20);

    noFill();
    arc(200, 250, 200, 150, 125, 25);
  }

  pop()
}
