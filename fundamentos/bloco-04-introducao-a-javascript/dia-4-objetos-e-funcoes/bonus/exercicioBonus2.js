let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

function arrayOfNumbers(vector) {
  let par=[]
  for (const index1 in vector) {
    const vector1 = vector[index1] 
    for (const index2 in vector1) {
      const vector2 = vector1[index2]
      if(vector2%2==0)
      par.push(vector2)
    }
  }
  return console.log(par);
}

arrayOfNumbers(vector)