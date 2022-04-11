function transformRomanNumbers(romanNumber) {
  total = 0;
  const tableRomanNumber = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let numberRomanInteger = [];
  for (const iterator of romanNumber) {
    numberRomanInteger.push(tableRomanNumber[iterator]);
  }

  for (const index in numberRomanInteger) {
    const previous = numberRomanInteger[index - 1];
    const current = numberRomanInteger[index];
    if (previous < current) {
      total -= previous;
      total += current - previous;
    } else {
      total += current;
    }
  }
  return console.log(total);
}

transformRomanNumbers("CXLIX");
