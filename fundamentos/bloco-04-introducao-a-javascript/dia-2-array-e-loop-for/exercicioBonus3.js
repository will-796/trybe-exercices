let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multNumbers = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i == numbers.length - 1) {
    multNumbers.push(numbers[i] * 2);
  } else {
    multNumbers.push(numbers[i] * numbers[i + 1]);
  }
}

console.log(multNumbers);
