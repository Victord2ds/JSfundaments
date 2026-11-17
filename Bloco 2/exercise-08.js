// Bilheteria do cinema

const TICKET_PRICE = 40;

let age = Number(prompt("Digite a idade:"));
let isStudent = prompt("É estudante? (s/n):");
let weekDay = prompt("Digite o dia da semana:");

let finalPrice = TICKET_PRICE;

if (age < 12 || age >= 60 || isStudent === "s" || weekDay === "terça") {
    finalPrice = TICKET_PRICE / 2;
}

console.log("Valor final do ingresso: R$" + finalPrice.toFixed(2));