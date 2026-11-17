// Bilhete Único

const FARE = 5.00;

let balance = Number(prompt("Digite o saldo do cartão:"));

let trips = Math.floor(balance / FARE);
let change = balance % FARE;

console.log("Você pode fazer " + trips + " viagem(s).");
console.log("Sobra: R$" + change.toFixed(2));