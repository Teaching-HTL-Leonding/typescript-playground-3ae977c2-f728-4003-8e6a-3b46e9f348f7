let nextSmiling = true

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Function CALL
  // +------------------------------ Function name
  // |  +--------------------------- Function parameter
  // v  v
  smile(nextSmiling);
}

function mouseClicked() {
  smile(nextSmiling)
  nextSmiling = !nextSmiling
}


function smile(happy: boolean) {
  const x = random(70, 430)
  const y = random(70, 430)

  push()
  translate(x, y)
  scale(0.2)

  stroke("black");
  strokeWeight(10);

  if (happy === true) {
    fill("yellow");

    circle(200, 200, 375);
    noFill();
    arc(200, 250, 200, 150, 0, 180);

  } else {
    fill("lime");

    circle(200, 200, 375);
    noFill();
    arc(200, 300, 200, 150, 180, 0);
  }

 fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);

  pop()
}
