// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function numberMostRepeated(array) {
  let counterMax = 0
  let indexOfMax 
  for (const index1 in array) {
    counter = 0
    for (const index2 in array) {
      if (array[index1] == array[index2]) {
        counter +=1
      }
      if(counter>counterMax){
        counterMax = counter
        indexOfMax = index1
      }
    }
    counter = 0
  }
  return console.log(array[indexOfMax])
}

numberMostRepeated([2, 3, 2, 5, 8, 2, 3])

