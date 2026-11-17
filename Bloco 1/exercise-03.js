// Tempo de download

let fileSize = Number(prompt("Digite o tamanho do arquivo em GB:"));
let internetSpeed = Number(prompt("Digite a velocidade da internet em Mbps:"));

let fileSizeMb = fileSize * 8192;
let seconds = fileSizeMb / internetSpeed;

let minutes = Math.floor(seconds / 60);
let remainingSeconds = Math.floor(seconds % 60);

console.log("Tempo estimado: " + minutes + " minuto(s) e " + remainingSeconds + " segundo(s).");