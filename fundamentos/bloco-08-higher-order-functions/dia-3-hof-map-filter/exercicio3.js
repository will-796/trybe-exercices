const books = require("./data");

function fantasyOrScienceFiction() {
  return books.filter(
    (value) => value.genre === "Fantasia" || value.genre === "Ficção Científica"
  );
}
console.log(fantasyOrScienceFiction());
