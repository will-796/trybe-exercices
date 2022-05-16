const books = require("./data");

const smallerName = () => {
  let nameBook = books[0].name;
  books.forEach((value) => {
    if (value.name.length < nameBook.length) nameBook = value.name
  });
  return nameBook;
}
console.log(smallerName());