// Escada de blocos

let height = Number(prompt("Digite a altura da escada:"));

for (let line = 1; line <= height; line = line + 1) {
    let stairs = "";

    for (let space = 0; space < height - line; space = space + 1) {
        stairs = stairs + " ";
    }

    for (let block = 0; block < line; block = block + 1) {
        stairs = stairs + "#";
    }

    console.log(stairs);
}