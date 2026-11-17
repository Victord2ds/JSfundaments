// Poupança programada

let monthlyDeposit = Number(prompt("Digite o depósito mensal:"));
let months = Number(prompt("Digite a quantidade de meses:"));

let balance = 0;
let totalDeposited = 0;

for (let month = 1; month <= months; month = month + 1) {
    balance = balance + monthlyDeposit;
    totalDeposited = totalDeposited + monthlyDeposit;

    balance = balance + (balance * 0.005);

    console.log("Mês " + month + ": R$" + balance.toFixed(2));
}

let earnings = balance - totalDeposited;

console.log("Total rendido: R$" + earnings.toFixed(2));