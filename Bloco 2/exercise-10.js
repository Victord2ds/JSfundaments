// Margem consignável

let salary = Number(prompt("Digite o salário:"));
let installment = Number(prompt("Digite o valor da parcela:"));

let maximumInstallment = salary * 0.30;

if (installment <= maximumInstallment) {
    console.log("Aprovado.");
} else {
    console.log("Negado.");
    console.log("Parcela máxima permitida: R$" + maximumInstallment.toFixed(2));
}