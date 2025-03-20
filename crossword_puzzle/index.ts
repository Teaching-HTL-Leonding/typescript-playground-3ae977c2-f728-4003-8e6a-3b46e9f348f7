/**
* Animal Crossword Game
*
* This is a crossword puzzle game where players guess letters to reveal animal names.
* The game highlights a vertical solution word that is formed from a specific column.
* Players win when they've guessed all letters in the solution word.
*/

// Raw input data in format: animalName,startPosition,hint

const crossword = `krebs    
elefant,-1,Größtes Landtier  
schlange,-4,Lautloser Jäger  
papagei,-2,Bunter Sprachkünstler  
pinguin,0,Flugunfähiger Schwimmer  
esel,-2,Sturer Vierbeiner  
piranha,-2,Gefährlicher Schwarmfisch  
seestern,-3,Meerestier mit fünf Armen  
schildkröte,-1,Langsamer Panzerträger  
hund,0,Treuer Begleiter  
seelöwe,-3,Verspielter Meeressäuger     
aal,-1,Schlängelnder Stromleiter  
antilope,-1,Schneller Sprinter der Savanne  
regenwurm,-2,Bodenlockerer mit Ringeln  
seegurke,-2,Tarnkünstler der Tiefsee`;

const animals: string[] = [];
const startPosition: number[] = [];
const hints: string[] = [];

// The word that players need to completely reveal to win
const solution = 'klapperschlange';

// === Write the necessary code starting here ===
function setup() {
    createCanvas(600, 600)
    parseCrossword();

    for (let i = 0; i < animals.length; i++) {
        fill("white");
        text(`${animals}`, width / 2, 20)
    }

}

function parseCrossword() {
    const lines = crossword.split('\n');

    for (const line of lines) {
        const parts = line.split(',');
        animals.push(parts[0]);
        startPosition.push(parseInt(parts[1]));
        hints.push(parts[2])
    }

    
}
