// Carrinho de compras

let items = 0;
let total = 0;
let mostExpensive = 0;

while (true) {
    let input = prompt("Digite o preço do item ou 'fim' para encerrar:");

    if (input === "fim") {
        break;
    }

    let price = Number(input);

    if (price > 0) {
        items = items + 1;
        total = total + price;

        if (price > mostExpensive) {
            mostExpensive = price;
        }
    } else {
        console.log("Preço inválido!");
    }
}

if (total > 300) {
    total = total - (total * 0.10);
}

console.log("Quantidade de itens: " + items);
console.log("Item mais caro: R$" + mostExpensive.toFixed(2));
console.log("Total: R$" + total.toFixed(2));