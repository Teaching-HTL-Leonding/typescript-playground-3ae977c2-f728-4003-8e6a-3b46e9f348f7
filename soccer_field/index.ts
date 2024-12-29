
const SCALE = 5;
const MARGIN = 4;
const playerNumbers: number[] = [1, 17, 22, 23, 20, 6, 15, 5, 11, 7, 9];


const firstNames: string[] = [
  "Thibaut", "Lucas", "Antonio", "Ferland", "Fran",
  "Eduardo", "Federico", "Jude", "Rodrygo", "Vinícius", "Kylian"
];

// Last names
const lastNames: string[] = [
  "Courtois", "Vázquez", "Rüdiger", "Mendy", "García",
  "Camavinga", "Valverde", "Bellingham", "Goes", "Júnior", "Mbappé"
];

function setup() {
  createCanvas((100 + MARGIN * 2) * SCALE, (70 + MARGIN * 2) * SCALE);
  background("green");

  strokeWeight(0.5);
  stroke("white");
  noFill();
  angleMode(DEGREES);

  push();

  scale(SCALE);
  translate(MARGIN, MARGIN);

  rect(0, 0, 100, 70);

  fill("#008000d0");
  noStroke();
  rect(10, 5, 80, 60);

  textSize(3)

  for (let i = 0; i < playerNumbers.length; i++) {
    fill("orange")
    textAlign(RIGHT)
    text(playerNumbers[i], 33, 5 * i + 10)

    fill("yellow")
    textAlign(LEFT)
    text(`${firstNames[i]} ${lastNames[i]}`, 37, 5 * i + 10)
  }

  pop();
}
