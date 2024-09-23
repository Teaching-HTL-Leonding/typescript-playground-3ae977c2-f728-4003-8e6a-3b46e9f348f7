function setup() {
  createCanvas(400, 400);

  // We want to use degrees, not rad. Want to learn more?
  // https://brilliant.org/wiki/degrees-radian/
  angleMode(DEGREES);

  stroke("black");
  strokeWeight(10);
  fill("yellow");

  circle(200, 200, 375);

  fill("black");
  circle(125, 125, 20);
  circle(275, 125, 20);

  noFill();
}