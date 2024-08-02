let frase = "JavaScript é incrível!";

console.log("Comprimento da frase:", frase.length);

let palavraExtraida = frase.substring(frase.indexOf("incrível"), frase.indexOf("incrível") + "incrível".length);
console.log("Palavra extraída:", palavraExtraida);

let novaFrase = frase.replace("incrível", "fantástico");
console.log("Nova frase:", novaFrase);