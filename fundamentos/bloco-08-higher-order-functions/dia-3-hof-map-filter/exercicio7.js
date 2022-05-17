const books = require("./data");

function authorWith3DotsOnName() {
  return books.find((value) => value.author.name.split(".").length === 4).name;
}

console.log(authorWith3DotsOnName());