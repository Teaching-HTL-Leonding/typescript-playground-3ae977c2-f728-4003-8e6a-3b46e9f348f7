function setup() {
createCanvas(200, 200)
const word = "A"

let isPalindrome = true
for(let i = 0; i < word.length / 2; i++) {
    if(word[i] != word[word.length - 1 -i]) {
        isPalindrome = false
    }
}

if (isPalindrome) {
    background("green")
} else {
    background("red")
}
}