let matriz = [
    [1, 2, 3],
    [4, 5, 6]
  ];

  console.log("Matriz original:");
  console.log(matriz);

  let valor = matriz[1][2];
  console.log("Valor do elemento na segunda linha, terceira coluna:", valor);

  matriz[0][1] = 99;
 
  console.log("Matriz atualizada:");
  console.log(matriz);