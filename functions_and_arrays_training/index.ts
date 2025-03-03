function setup() {
    createCanvas(500, 500);
    background("white");

    let result = "";
    let sum = getSum("1,2,30,4,5");
    result += `getSum 1: ${sum} ${sum === 42 ? "✅" : "❌"}\n`;

    sum = getSum("");
    result += `getSum 2: ${sum} ${sum === 0 ? "✅" : "❌"}\n`;

    let index = getIndexOf("1,2,30,4,5", 30);
    result += `getIndexOf 1: ${index} ${index === 4 ? "✅" : "❌"}\n`;

    index = getIndexOf("1,2,30,4,5", 31);
    result += `getIndexOf 2: ${index} ${index === -1 ? "✅" : "❌"}\n`;

    let array = [1, 2, 30, 4, 5];
    index = findIndexInArray(array, 30);
    result += `findIndexInArray 1: ${index} ${index === 2 ? "✅" : "❌"}\n`;

    index = findIndexInArray(array, 31);
    result += `findIndexInArray 2: ${index} ${index === -1 ? "✅" : "❌"}\n`;

    let cardShortcode = "S5";
    let decoded = decodeCCard(cardShortcode);
    result += `decodeCCard 1: ${decoded} ${decoded === "5 of Spades" ? "✅" : "❌"}\n`;

    cardShortcode = "HJ";
    decoded = decodeCCard(cardShortcode);
    result += `decodeCCard 2: ${decoded} ${decoded === "Jack of Hearts" ? "✅" : "❌"}\n`;

    let evenNumbers = findAllEvenNumbers("1,2,30,4,5");
    result += `findAllEvenNumbers 1: ${evenNumbers} ${evenNumbers.indexOf(2) !== -1 && evenNumbers.indexOf(30) !== -1 && evenNumbers.indexOf(4) !== -1 ? "✅" : "❌"}\n`;

    evenNumbers = findAllEvenNumbers("1,3,5,7,9");
    result += `findAllEvenNumbers 2: ${evenNumbers} ${evenNumbers.length === 0 ? "✅" : "❌"}\n`;

    evenNumbers = findAllEvenNumbers("");
    result += `findAllEvenNumbers 3: ${evenNumbers} ${evenNumbers.length === 0 ? "✅" : "❌"}\n`;

    fill("black");
    textAlign(LEFT, TOP);
    textSize(15);
    text(result, 10, 10, width - 20, height - 20);

}

/**
* Parse a string of numbers separated by commas and return the sum of the numbers
* @param numbersString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @returns The sum of the numbers, 0 if the string is empty
*/
function getSum(numbersString: string): number {
    let symbole = "";
    let currentNumber = 0;

    for (let i = 0; i < numbersString.length; i++) {
        if (numbersString[i] === ",") {
            currentNumber += parseInt(symbole);
            symbole = ""
        } else {
            symbole += parseInt(numbersString[i]);
        }
    }

    if (numbersString) {
        currentNumber += parseInt(symbole);
    }
    return currentNumber;
}

/**
* Get the start index of a number in a string of numbers separated by commas
* @param numbersString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @param number - The number to get the index of (e.g. 30)
* @returns The start index of the number, -1 if the number is not found
*/
function getIndexOf(numbersString: string, number: number): number {
    let start = 0;
    let currentWord = "";



    return -1; // <<< Remove this line and implement the function
}

/**
* Find the index of a number in an array
* @param array - An array of numbers (e.g. [1, 2, 30, 4, 5])
* @param number - The number to find the index of (e.g. 30)
* @returns The index of the number, -1 if the number is not found
*/
function findIndexInArray(array: number[], number: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            return i
        }
    }
    return -1;
}

/**
* Decode a playing card shortcode
* @param cardShortcode - A shortcode for a playing card (e.g. "S5", "HJ", "DQ", "C8")
* @returns The decoded playing card (e.g. "5 of Spades", "Jack of Hearts", "Queen of Diamonds", "8 of Clubs")
* 
* Shortcodes consist of the suite (first character) and the rank (second character).
* 
* Suites:
* * S: Spades (♠)
* * H: Hearts (♥)
* * D: Diamonds (♦)
* * C: Clubs (♣)
* 
* Ranks:
* * 2-9: The number
* * T: 10
* * J: Jack
* * Q: Queen
* * K: King
* * A: Ace
*/
function decodeCCard(cardShortcode: string): string {
    let suits = cardShortcode[0];
    let ranks = cardShortcode[1];

    let suitnames: string;
    let ranknames: string;

    switch (suits) {
        case "H": suitnames = "Hearts";
            break;
        case "S": suitnames = "Spades";
            break;
        case "D": suitnames = "Diamonds";
            break;
        case "C": suitnames = "Clubs";
        default: suitnames = "Unknown";
    }

    switch (ranks) {
        case "2": ranknames = "2";
            break;
        case "3": ranknames = "3";
            break;
        case "4": ranknames = "4";
            break;
        case "5": ranknames = "5";
            break;
        case "6": ranknames = "6";
            break;
        case "7": ranknames = "7";
            break;
        case "8": ranknames = "8";
            break;
        case "9": ranknames = "9";
            break;
        case "T": ranknames = "10";
            break;
        case "J": ranknames = "Jack";
            break;
        case "Q": ranknames = "Queen";
            break;
        case "K": ranknames = "King";
            break;
        case "A": ranknames = "Ace";
            break;
        default: "Unknown";
    }

    return `${ranknames} of ${suitnames}`;
}

/**
* Find all even numbers in a string of numbers separated by commas
* @param numberString - A string of numbers separated by commas (e.g. "1,2,30,4,5")
* @returns An array of even numbers (e.g. [2, 30, 4]), empty array if no even numbers are found
*/
function findAllEvenNumbers(numberString: string): number[] {

    let evenNumbers: number[] = [];
    let currentNumber = ""

    for (let i = 0; i < numberString.length; i++) {
        if (numberString[i] === ",") {
            let xy = parseInt(currentNumber);
            if (xy % 2 === 0) {
                evenNumbers.push(xy)
            }
            currentNumber = ""
        } else {
            currentNumber += numberString[i];
        }
    }

    return evenNumbers;
}
