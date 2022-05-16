const books = require("./data");

const someBookWasReleaseOnThe80s = () => {
  return books.some((value) => value.releaseYear>=1980 && value.releaseYear<=1989)
}

console.log(someBookWasReleaseOnThe80s());