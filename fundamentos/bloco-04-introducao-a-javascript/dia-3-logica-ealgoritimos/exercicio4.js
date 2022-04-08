// Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

//verificar quais numero primos existem de 0 a 50

let range = 50;
let ePrimo;
let primos = [];
for (let i = 1; i <= range; i += 1) {
  ePrimo = true;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      ePrimo = false;
      break;
    }
  }
  if (ePrimo) {
    primos.push(i);
  }
}

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  
}

//verificar o maior numero primo
let maiorPrimo = primos[0];
for (let k = 0; k < primos.length; k++) {
  if (maiorPrimo < primos[k]) {
    maiorPrimo = primos[k];
  }
}

console.log(maiorPrimo);
