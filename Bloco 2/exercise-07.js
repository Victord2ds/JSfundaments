// Frete da loja virtual

let purchaseValue = Number(prompt("Digite o valor da compra:"));
let weight = Number(prompt("Digite o peso do pacote em kg:"));

let shipping = 0;

if (purchaseValue > 250) {
    shipping = 0;
    console.log("Frete grátis.");
} else if (weight <= 1) {
    shipping = 15;
} else if (weight <= 5) {
    shipping = 25;
} else {
    shipping = 25 + ((weight - 5) * 4);
}

let total = purchaseValue + shipping;

console.log("Frete: R$" + shipping.toFixed(2));
console.log("Total: R$" + total.toFixed(2));