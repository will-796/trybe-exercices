function biggestIndexArray(array) {
  let smallest = array[0]
  let indexOfSmallest
  for (const index in array) {
    if(array[index] < smallest){
      smallest = array[index]
      indexOfSmallest = index
    }
  }
  return console.log(indexOfSmallest)
}

biggestIndexArray([2, 4, 6, 7, 10, 0, -3])