// Raio-x da frase

let phrase = prompt("Digite uma frase:").toLowerCase();

let vowels = 0;
let consonants = 0;
let spaces = 0;
let numbers = 0;

for (let i = 0; i < phrase.length; i = i + 1) {
    let character = phrase[i];

    switch (character) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            vowels = vowels + 1;
            break;

        case " ":
            spaces = spaces + 1;
            break;

        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            numbers = numbers + 1;
            break;

        default:
            if (character >= "a" && character <= "z") {
                consonants = consonants + 1;
            }
    }
}

console.log("Vogais: " + vowels);
console.log("Consoantes: " + consonants);
console.log("Espaços: " + spaces);
console.log("Números: " + numbers);