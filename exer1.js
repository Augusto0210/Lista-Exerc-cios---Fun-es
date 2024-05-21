/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
AUGUSTO LOPES COSTA DA SILVA*/
var teclado = require("prompt-sync")();
function verificar(num) {
    if (num % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
var num1 = parseInt(teclado("Digite o numero"));
var par = verificar(num1);
console.log("O n\u00FAmero que foi digitado \u00E9 par?");
if (par == true) {
    console.log("Sim, numero é Par.");
}
else {
    console.log("Não, numero é Ímpar.");
}
