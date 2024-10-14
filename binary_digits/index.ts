function setup() {

  const num = Math.floor(random(0, 64));
  const lastDigit1 = num % 2
  createCanvas(1000, 600);
  background("black");

  fill("yellow");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${Math.floor(num / 100000) % 10}`, width / 14, height / 3, width / 9, height / 3);

  text(`${Math.floor(num / 100000) % 10}`, width / 5, height / 3, width / 9, height / 3);
  text(`${Math.floor(num / 100000) % 10}`, width / 3, height / 3, width / 9, height / 3);
  text(`${Math.floor(num / 100000) % 10}`, width / 2.15, height / 3, width / 9, height / 3);
  text(`${Math.floor(num / 100000) % 10} `, width / 1.68, height / 3, width / 9, height / 3);
  text(`${Math.floor(num) % 10}`, width / 1.38, height / 3, width / 9, height / 3);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  stroke("yellow");
  noFill();
  strokeWeight(2);
  rect(width / 14, height / 3, width / 9, height / 3);
  rect(width / 5, height / 3, width / 9, height / 3);
  rect(width / 3, height / 3, width / 9, height / 3);
  rect(width / 2.15, height / 3, width / 9, height / 3);
  rect(width / 1.68, height / 3, width / 9, height / 3);
  rect(width / 1.38, height / 3, width / 9, height / 3);
  
}