// Conta de luz

const BASE_RATE = 0.80;

let consumption = Number(prompt("Digite o consumo em kWh:"));
let flag = prompt("Digite a bandeira:").toLowerCase();

let extraRate = 0;

if (flag === "amarela") {
    extraRate = 0.02;
} else if (flag === "vermelha1") {
    extraRate = 0.04;
} else if (flag === "vermelha2") {
    extraRate = 0.08;
}

let total = (consumption * BASE_RATE) + (consumption * extraRate);

console.log("Total da conta: R$" + total.toFixed(2));