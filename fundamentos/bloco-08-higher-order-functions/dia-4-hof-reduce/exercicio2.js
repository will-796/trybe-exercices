const books = require("./data");

const expectedResult =
  "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

function reduceNames() {
  return books.reduce((allNames, element, index) => {
     if (index === books.length - 1) {
      allNames += `${element.author.name}.`;
    } else {
      allNames += `${element.author.name}, `;
    }
    return allNames
  }, '');
}

console.log(reduceNames());
