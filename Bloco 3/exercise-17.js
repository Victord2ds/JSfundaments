// Rastreio do delivery

let status = prompt("Digite a letra do status:").toUpperCase();

switch (status) {
    case "P":
    case "A":
        console.log("O pedido ainda pode ser cancelado.");
        break;

    case "S":
        console.log("O pedido saiu para entrega e não pode mais ser cancelado.");
        break;

    case "E":
        console.log("O pedido foi entregue.");
        break;

    case "C":
        console.log("O pedido foi cancelado.");
        break;

    default:
        console.log("Status inválido.");
}