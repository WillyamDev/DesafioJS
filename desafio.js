function encontrarMenorNumero(numeros) {
    let menorNumero = numeros[0];

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }

    return menorNumero;
}

let numeros = [10, 5, 8, 21, 3];
let menor = encontrarMenorNumero(numeros);
console.log(menor);