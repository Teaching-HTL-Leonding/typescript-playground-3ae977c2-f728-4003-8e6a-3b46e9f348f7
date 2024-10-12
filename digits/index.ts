function setup() {

  const num = Math.floor(random(0, 1_000_000));


  createCanvas(1000, 600)
  background("black")

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  textAlign(CENTER, CENTER);
  textSize(20);
  text('${Math.floor(num / 100000) % 10},', width / 1.38, height / 3, width / 9, height / 3)

  stroke("yellow")
  noFill()
  strokeWeight(2)
  rect(width / 14, height / 3, width / 9, height / 3)
  rect(width / 5, height / 3, width / 9, height / 3)
  rect(width / 3, height / 3, width / 9, height / 3)
  rect(width / 2.15, height / 3, width / 9, height / 3)
  rect(width / 1.68, height / 3, width / 9, height / 3)
  rect(width / 1.38, height / 3, width / 9, height / 3)




}