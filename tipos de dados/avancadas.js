function multiplica(a, b) {
    return a * b;
}


let resultadoMultiplicacao = multiplica(7, 8);
console.log(`O resultado da multiplicação de 7 e 8 é: ${resultadoMultiplicacao}`);

function quadrado(x) {
    return x * x;
}

let numeros = [1, 2, 3, 4, 5];

let quadrados = numeros.map(quadrado);

console.log(`Os quadrados dos números [1, 2, 3, 4, 5] são: ${quadrados}`);