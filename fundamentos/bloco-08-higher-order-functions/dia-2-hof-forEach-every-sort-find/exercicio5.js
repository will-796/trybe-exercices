const books = require("./data")

const everyoneWasBornOnSecXX = () => {
  return books.every((value) => value.author.birthYear<1999 && value.author.birthYear>1900)
}

console.log(everyoneWasBornOnSecXX());