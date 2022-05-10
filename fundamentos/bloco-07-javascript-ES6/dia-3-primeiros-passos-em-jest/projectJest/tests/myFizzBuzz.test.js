const { myFizzBuzz } = require("../script");

describe("test myFizzBuzz", () => {
  it("input 15 and return fizzbuzz", () => {
    expect(myFizzBuzz(15)).toMatch('fizzbuzz');
  });
  it("input 9 and return buzz", () => {
    expect(myFizzBuzz(9)).toMatch('fizz');
  });
  it("input 10 and return fizzbuzz", () => {
    expect(myFizzBuzz(10)).toMatch('buzz');
  });
});