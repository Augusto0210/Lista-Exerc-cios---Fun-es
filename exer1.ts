/*Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
AUGUSTO LOPES COSTA DA SILVA*/

const teclado = require (`prompt-sync`)();
function verificar(num): boolean{
    if (num % 2 == 0) {
        return true;
    } else {
        return false;
    }
}
let num1: number = parseInt(teclado(`Digite o numero`));
let par = verificar(num1);

console.log(`O número que foi digitado é par?`);

if (par == true) {
    console.log("Sim, numero é Par.");
} else {
    console.log("Não, numero é Ímpar.");
}