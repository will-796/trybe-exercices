const books = require("./data");

const authorBornIn1947 = (year) =>
  books.find((value) => value.author.birthYear === year).author.name;

console.log(authorBornIn1947(1920));

