// Troco do caixa

let change = Number(prompt("Digite o valor do troco:"));

let hundred = Math.floor(change / 100);
change = change % 100;

let fifty = Math.floor(change / 50);
change = change % 50;

let twenty = Math.floor(change / 20);
change = change % 20;

let ten = Math.floor(change / 10);
change = change % 10;

let five = Math.floor(change / 5);
change = change % 5;

let two = Math.floor(change / 2);
change = change % 2;

let one = change;

console.log("Notas de 100: " + hundred);
console.log("Notas de 50: " + fifty);
console.log("Notas de 20: " + twenty);
console.log("Notas de 10: " + ten);
console.log("Notas de 5: " + five);
console.log("Notas de 2: " + two);
console.log("Moedas de 1: " + one);