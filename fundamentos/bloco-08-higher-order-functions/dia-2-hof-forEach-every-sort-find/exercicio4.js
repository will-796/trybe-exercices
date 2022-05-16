const books = require("./data");

const booksOrderedByReleaseYearDesc =() => {
  return books.sort((a,b)=> a.releaseYear - b.releaseYear)
}

console.log(booksOrderedByReleaseYearDesc());