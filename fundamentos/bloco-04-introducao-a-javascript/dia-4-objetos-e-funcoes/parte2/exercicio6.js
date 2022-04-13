// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumOneToN(number) {
  let sum =0
  for (let index = 0; index <= number; index+=1) {
    sum += index      
  }
  return console.log(sum); 
}

sumOneToN(5)