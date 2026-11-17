// Rodízio de São Paulo

let plateEnd = Number(prompt("Digite o final da placa:"));
let weekDay = prompt("Digite o dia da semana:");
let hour = Number(prompt("Digite a hora (0 a 23):"));

let canDrive = true;

if (weekDay === "segunda" && (plateEnd === 1 || plateEnd === 2)) {
    canDrive = false;
} else if (weekDay === "terça" && (plateEnd === 3 || plateEnd === 4)) {
    canDrive = false;
} else if (weekDay === "quarta" && (plateEnd === 5 || plateEnd === 6)) {
    canDrive = false;
} else if (weekDay === "quinta" && (plateEnd === 7 || plateEnd === 8)) {
    canDrive = false;
} else if (weekDay === "sexta" && (plateEnd === 9 || plateEnd === 0)) {
    canDrive = false;
}

let restrictedTime = (hour >= 7 && hour < 10) || (hour >= 17 && hour < 20);

if (canDrive === false && restrictedTime === true) {
    console.log("O carro NÃO pode circular.");
} else {
    console.log("O carro pode circular.");
}