// Apuração da eleição do grêmio

let totalVotes = Number(prompt("Digite a quantidade de votos:"));

let candidate1 = 0;
let candidate2 = 0;
let candidate3 = 0;
let nullVotes = 0;

for (let i = 1; i <= totalVotes; i = i + 1) {
    let vote = Number(prompt("Digite o voto (1, 2, 3 ou 0 para nulo):"));

    if (vote === 1) {
        candidate1 = candidate1 + 1;
    } else if (vote === 2) {
        candidate2 = candidate2 + 1;
    } else if (vote === 3) {
        candidate3 = candidate3 + 1;
    } else {
        nullVotes = nullVotes + 1;
    }
}

console.log("Candidato 1: " + candidate1 + " voto(s)");
console.log("Candidato 2: " + candidate2 + " voto(s)");
console.log("Candidato 3: " + candidate3 + " voto(s)");
console.log("Nulos: " + nullVotes + " voto(s)");

if (candidate1 > candidate2 && candidate1 > candidate3) {
    console.log("Vencedor: Candidato 1");
} else if (candidate2 > candidate1 && candidate2 > candidate3) {
    console.log("Vencedor: Candidato 2");
} else if (candidate3 > candidate1 && candidate3 > candidate2) {
    console.log("Vencedor: Candidato 3");
} else {
    console.log("Houve empate.");
}