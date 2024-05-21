/*Exercício 3
Crie uma funçãoque recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();
var teclado = require('prompt-sync')();
function calcVolumeEsfera(raioR) {
    var pi = 3.14;
    var volume = (4 / 3) * pi * (raioR * raioR * raioR);
    return volume;
}
var raioEsfera = parseFloat(teclado("Digite o raio da esfera: "));
var volEsfera = calcVolumeEsfera(raioEsfera);
console.log("O volume da esfera é:", volEsfera);
