const books = require("./data");

function oldBooks() {
  return books
    .filter((value) => 2022 - value.releaseYear > 60)
    .map((value) => value.name);
}

console.log(oldBooks());