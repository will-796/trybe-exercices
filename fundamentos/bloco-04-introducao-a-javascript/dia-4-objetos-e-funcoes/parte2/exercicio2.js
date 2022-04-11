function biggestIndexArray(array) {
  let bigger = array[0]
  let indexOfBigger
  for (const index in array) {
    if(array[index] > bigger){
      bigger = array[index]
      indexOfBigger = index
    }
  }
  return console.log(indexOfBigger)
}

biggestIndexArray([2, 3, 6, 7, 10, 1])