// Racha da conta

let bill = Number(prompt("Digite o valor da conta:"));
let people = Number(prompt("Digite o número de pessoas:"));
let service = prompt("Vai ter os 10% de serviço? (s/n):");

let total = bill;

if (service === "s") {
    total = bill + (bill * 0.10);
}

let perPerson = total / people;

console.log("Cada pessoa paga: R$" + perPerson.toFixed(2));