const books = require("./data");

const authorUnique = () =>
  books.every(
    (value1) =>
      !books.some(
        (value2) =>
          value1.author.name !== value2.author.name &&
          value1.author.birthYear === value2.author.birthYear
      )
  );
console.log(authorUnique());
