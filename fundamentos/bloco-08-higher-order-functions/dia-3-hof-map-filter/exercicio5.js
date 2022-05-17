const books = require("./data");

function fantasyOrScienceFictionAuthors() {
  return books
    .filter(
      (value) =>
        value.genre === "Fantasia" || value.genre === "Ficção Científica"
    )
    .map((value) => value.author.name)
    .sort((a, b) => a - b);
}

console.log(fantasyOrScienceFictionAuthors());
