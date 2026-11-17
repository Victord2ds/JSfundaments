// Qual plano de celular?

let dataUsage = Number(prompt("Digite quantos GB você usa por mês:"));

let planA = 55;
let planB = 30 + ((dataUsage - 5) * 3);

if (planB < 30) {
    planB = 30;
}

if (dataUsage > 20) {
    console.log("O plano A não serve.");
    console.log("Use o plano B: R$" + planB.toFixed(2));
} else if (planA < planB) {
    console.log("O plano A é mais barato.");
    console.log("Economia: R$" + (planB - planA).toFixed(2));
} else if (planB < planA) {
    console.log("O plano B é mais barato.");
    console.log("Economia: R$" + (planA - planB).toFixed(2));
} else {
    console.log("Os dois planos custam o mesmo.");
}