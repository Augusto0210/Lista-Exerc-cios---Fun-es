/*Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
AUGUSTO LOPES COSTA DA SILVA*/

console.clear();

const teclado = require(`prompt-sync`)();
function rDecre (num1:number, num2:number, num3:number):number{
    if(num1 < num2 && num1 < num3){
        return num1
    } else if(num2 < num1 && num2 < num3){
        return num2;
    } else if(num3 < num1 && num3 < num1){
        return num3;
    } else {
        return 0;
    }
}

let n1: number = parseFloat(teclado(`Digite aqui o 1º número: `));
let n2: number = parseFloat(teclado(`Digite aqui o 2º número: `));
let n3: number = parseFloat(teclado(`Digite aqui o 3º número: `));

let menorNumero = rDecre(n1,n2,n3);
console.log(`Menor número será entre os 3 digitados é ${menorNumero}`);