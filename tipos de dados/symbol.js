let chave1 = Symbol('descricao');
let chave2 = Symbol('descricao'); 

console.log("chave1 é igual a chave2?", chave1 === chave2); 

let usuario = {};
usuario[chave1] = 'valor da propriedade com chave1';

console.log("Valor da propriedade com chave1:", usuario[chave1]);