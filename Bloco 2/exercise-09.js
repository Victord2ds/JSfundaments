// Saudação pelo horário

let hour = Number(prompt("Digite a hora (0 a 23):"));
let minute = Number(prompt("Digite o minuto (0 a 59):"));

if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    console.log("Horário inválido.");
} else if (hour >= 0 && hour < 6) {
    console.log("Boa madrugada!");
} else if (hour >= 6 && hour < 12) {
    console.log("Bom dia!");
} else if (hour >= 12 && hour < 18) {
    console.log("Boa tarde!");
} else {
    console.log("Boa noite!");
}