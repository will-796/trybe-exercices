const sumNumbers = (...numbers) => {
  return numbers.reduce((sum, number) => sum + number);
};

console.log(sumNumbers(1, 2, 5, 7, 7, 1));
