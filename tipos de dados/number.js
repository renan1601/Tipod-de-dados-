let numStr = "123.45";

let num = parseFloat(numStr);

let roundedNum = Math.round(num);
console.log("Número arredondado:", roundedNum);

let roundedNumStr = roundedNum.toFixed(3);
console.log("Número arredondado com 3 casas decimais:", roundedNumStr);

let isNaNStr = isNaN(parseFloat(numStr)); 
console.log("numStr é NaN?", isNaNStr);