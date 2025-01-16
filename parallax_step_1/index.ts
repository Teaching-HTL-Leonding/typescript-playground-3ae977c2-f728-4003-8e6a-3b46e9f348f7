let backgroundimages: p5.Image[] = [];

let backgroundscale: number = 1;
let scaledImagewidth: number = 0;
let scaledImageheight: number = 0;
let scrollposition: number = 0;

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
    background("black")

    if (keyIsDown(39)) {
        scrollposition -= 5
    } else if (keyIsDown(37)) {
        scrollposition += 5
    }


    let step = scrollposition / backgroundimages.length

    for (let i = 0; i < backgroundimages.length; i++) {
        translate(step, 0)
        image(backgroundimages[i], 0, 0, scaledImagewidth, scaledImageheight);
        image(backgroundimages[i], -scaledImagewidth, 0, scaledImagewidth, scaledImageheight);
        image(backgroundimages[i], scaledImageheight, 0, scaledImagewidth, scaledImageheight);


    }
}