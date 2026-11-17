// Casa de câmbio

const USD_RATE = 5.20;
const EUR_RATE = 5.60;
const ARS_RATE = 0.0055;
const JPY_RATE = 0.035;
const FEE = 0.02;

let reais = Number(prompt("Digite o valor em reais:"));
let currency = prompt("Digite a moeda (USD, EUR, ARS ou JPY):").toUpperCase();

let received = 0;

if (currency === "USD") {
    received = reais / USD_RATE;
} else if (currency === "EUR") {
    received = reais / EUR_RATE;
} else if (currency === "ARS") {
    received = reais / ARS_RATE;
} else if (currency === "JPY") {
    received = reais / JPY_RATE;
} else {
    console.log("Moeda inválida.");
}

if (received > 0) {
    received = received - (received * FEE);

    console.log("Você receberá: " + received.toFixed(2) + " " + currency);
}