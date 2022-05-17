const books = require("./data");

function nameAndAge() {
  return books
    .map((value) => ({
      age: value.releaseYear - value.author.birthYear,
      author: value.name,
    }))
    .sort((a, b) => a.age - b.age);
}

console.log(nameAndAge());
