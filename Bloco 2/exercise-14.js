// Entrada à prova de erro

let value = prompt("Digite um número:");

// Com ==, null == undefined retorna true.
// Com ===, null === undefined retorna false, porque os tipos são diferentes.
// Por isso usamos === para identificar corretamente quando o usuário clica em Cancelar.

if (value === null) {
    console.log("Operação cancelada");
} else if (value === "") {
    console.log("Nada foi digitado");
} else if (isNaN(Number(value))) {
    console.log("Valor inválido");
} else {
    let number = Number(value);

    console.log("O dobro é: " + (number * 2));
}