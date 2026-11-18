// Custo da viagem

let distance = Number(prompt("Digite a distância até o destino em km:"));
let consumption = Number(prompt("Digite o consumo do carro em km/l:"));
let fuelPrice = Number(prompt("Digite o preço do litro:"));

let litros = distance / consumption;
let oneWayCost = litros * fuelPrice;
let roundTripCost = oneWayCost * 2;
let costPerKm = roundTripCost / (distance * 2);

console.log("Custo de ida: R$" + oneWayCost.toFixed(2));
console.log("Custo de ida e volta: R$" + roundTripCost.toFixed(2));
console.log("Custo por km: R$" + costPerKm.toFixed(2));