const books = require("./data");

const expectedResult = {
  id: 1,
  name: "As Crônicas de Gelo e Fogo",
  genre: "Fantasia",
  author: {
    name: "George R. R. Martin",
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  return books.reduce((bigWord, element) => {
    bigWord.length < element.name.length ? (bigWord = element.name) : null;
    return bigWord;
  }, "");
}

console.log(longestNamedBook());
