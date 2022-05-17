const books = require("./data");

function oldBooksOrdered() {
  return books
    .filter((value) => 2022 - value.releaseYear > 60)
    .sort((a, b) => a.releaseYear - b.releaseYear);
}

console.log(oldBooksOrdered());
