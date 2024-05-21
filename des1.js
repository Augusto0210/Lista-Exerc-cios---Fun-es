/*Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
AUGUSTO LOPES COSTA DA SILVA*/
console.clear();
function listaNumerosPrimos() {
    function essePrimo(numero) {
        var i = 2;
        while (i < numero) {
            if (numero % i == 0) {
                return false;
            }
            i++;
        }
        return numero > 1;
    }
    var numerosPrimos = "0";
    var numero = 2;
    var primeiroPrimoEncontrado = false;
    while (numero <= 1000) {
        if (essePrimo(numero)) {
            if (primeiroPrimoEncontrado) {
                numerosPrimos += ", ";
            }
            else {
                primeiroPrimoEncontrado = true;
            }
            numerosPrimos += numero;
        }
        numero++;
    }
    return numerosPrimos;
}
console.log(listaNumerosPrimos());
