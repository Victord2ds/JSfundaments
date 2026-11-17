// Etanol ou gasolina?

let ethanolPrice = Number(prompt("Digite o preço do etanol:"));
let gasolinePrice = Number(prompt("Digite o preço da gasolina:"));

let percentage = (ethanolPrice / gasolinePrice) * 100;

if (percentage <= 70) {
    console.log("Abasteça com etanol.");
} else {
    console.log("Abasteça com gasolina.");
}

console.log("O etanol custa " + percentage.toFixed(2) + "% do preço da gasolina.");