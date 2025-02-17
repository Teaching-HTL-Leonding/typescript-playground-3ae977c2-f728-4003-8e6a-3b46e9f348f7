const AVG_TEMP_LINZ: number[] = [
  -0.7, 0.5, 4.7, 9.9, 14.2, 17.9, 19.5, 19.3, 14.7, 10, 4.8, 0.6,
];

const AVG_TEMP_JOHANNESBURG: number[] = [
  20, 20, 18, 15, 12, 9, 9, 12, 16, 18, 18, 19,
];

const Numbers: number[] = [
  35, 30, 25, 20, 15, 10, 5, 0, -5
]

function setup() {
  createCanvas(460, 300);
  background("white");

  // <<< Call the functions in the following order:
  // 1. Draw temperatures (gets AVG_TEMP_LINZ or AVG_TEMP_JOHANNESBURG as parameter)
  // 2. Draw axes
  drawAxes()
  // 3. Draw Y labels
  drawYLabels()
  // 4. Draw X labels
  drawXLabels()
}

function drawAxes() {

  const MARGIN = 12.5

  fill("black")
  strokeWeight(3)

  push()
  translate(MARGIN * 3, MARGIN)
  line(0, 0, 0, height - MARGIN * 1.8)
  pop()

  push()
  translate(MARGIN * 2, height - MARGIN * 3.4)
  line(0, 0, width - MARGIN * 3.2, 0)
  pop()
}

function drawYLabels() {

  const MARGIN = 12.5

  push()
  translate(MARGIN * 2, MARGIN)
  fill("black")
  strokeWeight(3)

  for (let i = 0; i < height; i += 35) {
    line(0, i, MARGIN * 2, i)
  }
  pop()

  for (let i = 0; i < Numbers.length; i++) {
    text(Numbers[i], 7, 15 + i * 35)
  }
}

function drawXLabels() {
  fill("black")

  const MARGIN = 12.5
  translate(60, height - MARGIN * 4)
  for(let i = 0; i < width; i += 35)
  line(i, 0, i, MARGIN)


}

function drawTemperatures(temperatures: number[]) {
  noStroke()
  fill("gold")

  for(let i = 0; i < temperatures.length; i ++) {
    let x = 
  }
}

