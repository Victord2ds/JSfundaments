// Nota com bônus de presença

let grade1 = Number(prompt("Digite a primeira nota:"));
let grade2 = Number(prompt("Digite a segunda nota:"));
let attendance = Number(prompt("Digite a frequência em %:"));

let average = (grade1 + grade2) / 2;

if (attendance < 75) {
    console.log("Reprovado por frequência.");
} else {
    if (attendance > 90) {
        average = average + 0.5;
    }

    if (average > 10) {
        average = 10;
    }

    if (average >= 6) {
        console.log("Aprovado. Média: " + average.toFixed(2));
    } else {
        console.log("Reprovado. Média: " + average.toFixed(2));
    }
}