const { myFizzBuzz } = require("../script");

describe("test myFizzBuzz", () => {
  it("input 15 and return fizzbuzz", () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it("input 9 and return buzz", () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  });
  it("input 10 and return fizzbuzz", () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  it("input string and return false", () => {
    expect(myFizzBuzz('10')).toBeFalsy();
  });
});