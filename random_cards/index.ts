let cardImage: p5.Image;
let color1: string = ""
let rank: string = ""


const BASE_URL = 'https://cddataexchange.blob.core.windows.net/images/cards';

function preload() {
  // Generate random color (0 = clubs, 1 = diamonds, 2 = hearts, 3 = spades)
  const colorIx = Math.floor(random(0, 4));

  // Generate random card (1 = Ace, 2 = 2, ..., 10 = 10, 11 = Jack, 12 = Queen, 13 = King)
  const cardIx = Math.floor(random(1, 14));

  switch (colorIx) {
    case 0: color1= "clubs"; break
    case 1: color1= "diamonds"; break
    case 2: color1= "hearts"; break
    case 3: color1= "shpades"; break

  }
}

function setup() {
  createCanvas(250, 250);
  background("darkgreen");

  imageMode(CENTER);
  image(cardImage, width / 2, height / 2);
}
