/*Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
AUGUSTO LOPES COSTA DA SILVA*/

console.clear();

const teclado = require('prompt-sync')();

function calcVolumeEsfera(raioR) {
    const pi = 3.14;
    const volume = (4 / 3) * pi * (raioR * raioR * raioR);
    return volume;
}

let raioEsfera = parseFloat(teclado("Digite o raio da esfera: "));
let volEsfera = calcVolumeEsfera(raioEsfera);
console.log("O volume da esfera é:", volEsfera);