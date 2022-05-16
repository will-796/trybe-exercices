const books = require("./data");

const getNamedBook = () => books.find((value) => value.name.length === 26)

console.log(getNamedBook());