//ethanol ou gasolina
let ethanolprice = Number(prompt("Digite o valor do Ethanol"));
let gasolinaprice = Number(prompt("Digite o valor da Gasolina"));

let porcentagem = (ethanolprice / gasolinaprice) * 10;

if (porcentagem <= 70) {
    console.log("Etanol compensa mais");
} else {
    console.log("Gasolina compensa mais");
}    

console.log("O etanol custa " + porcentagem.toFixed(2) + " % preço da gasolina");