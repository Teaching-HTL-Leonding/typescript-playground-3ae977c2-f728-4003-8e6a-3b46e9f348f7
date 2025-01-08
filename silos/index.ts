const INITIAL_FILL = "3,7,8,3,10,2"

const SILO_MAX = 10;
const CRICITAL_FILL = 8;

const silos: number[] = [];

const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 480;

const SILO_WIDTH = 50; // Width of each silo
const SILO_GAP = 25; // Gap between silos
const SILO_HEIGHT = 320; // Height of each silo
const SILOS_TOP = CANVAS_HEIGHT / 2 - SILO_HEIGHT / 2; // Y-coordinate of the top of the silos

const BUTTON_SIZE = 20; // Size of the buttons ("add" and "remove")
const BUTTON_GAP = 15; // Gap between the bottom of the buttons and the top of the silos
const BUTTON_TOP = SILOS_TOP - BUTTON_GAP - BUTTON_SIZE; // Y-coordinate of the top of the buttons



function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);

  let num = 0;
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    if (INITIAL_FILL[i] === ",") {
      silos.push(num);
      num = 0;
    } else {
      num = num * 10 + parseInt(INITIAL_FILL[i].trim());
    }
  }


  silos.push(num);
}

function draw() {
  background("black");

  textSize(25)
  fill("yellow")
  noStroke()
  for (let i = 0; i < INITIAL_FILL.length; i++) {
    text(silos[i], 45 + 75 * i, width - 50)
  }

  stroke("yellow")
  strokeWeight(3)

  translate(SILO_GAP, 80)


  push()
  for (let i = 0; i < INITIAL_FILL.length / 2; i++) {
    line(0, 0, 0, 320)
    line(50, 0, 50, 320)
    translate(75, 0)
  }
  pop()

}

function mouseClicked() {
  // <<< Add your code here
}
