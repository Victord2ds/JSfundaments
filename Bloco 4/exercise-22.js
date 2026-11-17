// Palíndromo

let word = prompt("Digite uma palavra:").toLowerCase();
let reversedWord = "";

for (let i = word.length - 1; i >= 0; i = i - 1) {
    reversedWord = reversedWord + word[i];
}

if (word === reversedWord) {
    console.log("É um palíndromo.");
} else {
    console.log("Não é um palíndromo.");
}