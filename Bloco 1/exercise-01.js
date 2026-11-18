// Racha da conta
let bill = Number(prompt("Digite o valor da conta:"));

let people = Number(prompt("Digite o número de pessoas:"));

let service = prompt("Vai ter os 10% de serviço? (s ou n):");

let total = bill;

if (service === "s") {
    total = bill + (bill * 0.10);
}

let perPeople = total / people;

console.log("Cada pessoa paga: R$" + perPeople.toFixed(2));

//tofixed formata um número para que ele tenha duas casas decimais