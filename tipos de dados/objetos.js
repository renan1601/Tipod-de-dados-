let carro = {
    marca: 'cytroën',
    modelo: 'aircross',
    ano: 2012,
   
detalhes: function() {
       console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
};
carro.detalhes();
carro.cor = 'Branco';
console.log(carro);