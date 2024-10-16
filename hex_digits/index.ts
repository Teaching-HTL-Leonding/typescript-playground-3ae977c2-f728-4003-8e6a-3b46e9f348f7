function setup() {

  const num = Math.floor(random(0, 151515));
  const lastDigit1 = num % 2
  const numwithoutlastdigit1 = Math.floor(num / 2)
  const lastDigit2 = numwithoutlastdigit1 % 2
  const numwithoutlastdigit2 = Math.floor(numwithoutlastdigit1 / 2)
  const lastDigit3 = numwithoutlastdigit2 % 2
  const numwithoutlastdigit3 = Math.floor(numwithoutlastdigit2 / 2)
  const lastDigit4 = numwithoutlastdigit3 % 2
  const numwithoutlastdigit4 = Math.floor(numwithoutlastdigit3 / 2)
  const lastDigit5 = numwithoutlastdigit4 % 2
  const numwithoutlastdigit5 = Math.floor(numwithoutlastdigit4 / 2)
  const lastDigit6 = numwithoutlastdigit5 % 2
  const numwithoutlastdigit6 = Math.floor(numwithoutlastdigit5 / 2)


  createCanvas(600, 600);
  background("black");

  fill("yellow");
  strokeWeight(2);
  textAlign(CENTER, CENTER);
  textSize(30);
  text(`${lastDigit6}`, width / 3, height / 3, width / 7, height / 3);
  text(`${lastDigit5}`, width / 6, height / 3, width / 7, height / 3);
  text(`${lastDigit4}`, width / 2, height / 3, width / 7, height / 3);

  textAlign(CENTER, CENTER);
  fill("yellow");
  noStroke();
  text(num, width / 2, height - 20);

  stroke("yellow");
  noFill();
  strokeWeight(2);
  rect(width / 8, height / 3, width / 10, height / 4);
  rect(width / 8 * 2.5, height / 3, width / 10, height / 4);
  rect(width / 8 * 4, height / 3, width / 10, height / 4);

}