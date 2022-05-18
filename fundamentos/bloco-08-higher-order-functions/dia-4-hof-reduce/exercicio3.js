const books = require("./data");

const expectedResult = 43;

function averageAge() {
  return books
    .reduce((average, element) => {
      const authorAge = element.releaseYear - element.author.birthYear;
      return average + authorAge / books.length;
    }, 0)
    .toFixed();
}

console.log(averageAge());
