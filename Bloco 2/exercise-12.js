// Prioridade do chamado

let urgency = Number(prompt("Digite a urgência (1 a 3):"));
let impact = Number(prompt("Digite o impacto (1 a 3):"));

let total = urgency + impact;

if (urgency === 3 && impact === 3) {
    console.log("P1 Crítico");
} else if (total === 5) {
    console.log("P2 Alto");
} else if (total === 3 || total === 4) {
    console.log("P3 Médio");
} else {
    console.log("P4 Baixo");
}