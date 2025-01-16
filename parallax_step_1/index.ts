let backgroundimages: p5.Image[] = [];

let backgroundscale: number = 1;
let scaledImagewidth: number = 0;
let scaledImageheight: number = 0;

function preload() {
    for (let i = 0; i < winter.length; i++) {
        backgroundimages.push(loadImage(`${BASE_URL}/winter/${winter[i]}`));
    }
}

function setup() {
    createCanvas(500, 500);

    backgroundscale = width / backgroundimages[0].width;
    scaledImagewidth = backgroundimages[0].width * backgroundscale;
    scaledImageheight = backgroundimages[0].height * backgroundscale;
}

function draw() {
    for (let i = 0; i < backgroundimages.length; i++) {
        image(backgroundimages[i], 0, 0, scaledImagewidth, scaledImageheight);
    }
}