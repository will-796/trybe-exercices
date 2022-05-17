const books = require("./data");

function formatedBookNames() {
  return books.map(
    (value) => `${value.name} - ${value.genre} - ${value.author.name}`
  );
}

console.log(formatedBookNames());
