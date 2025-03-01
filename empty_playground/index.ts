let stringToParse = "18;4:1";
let emptyString = "";
let parsedArray:number[] = [];

function setup() {
    createCanvas(600, 400)
    background("black")

    for(let i = 0; i < stringToParse.length; i++) {
        if(stringToParse[i] === ";") {
            emptyString += parseInt(stringToParse[i]);
        }
    }
}

function draw() {
}
