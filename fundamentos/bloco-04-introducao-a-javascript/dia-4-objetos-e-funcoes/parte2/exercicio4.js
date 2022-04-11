function biggestWord (array) {
  let numberOfChar = 0
  let indexOfBiggestWord
  for (const index in array) {
    wordLength = array[index].length
    if(numberOfChar < wordLength){
      numberOfChar = wordLength
      indexOfBiggestWord = index      
    }
  }

  return console.log(array[indexOfBiggestWord]);
}

biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])