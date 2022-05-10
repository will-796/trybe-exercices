const { sum } = require("../script");

describe('test sum',()=> {
  it("the sum of 4 and 5 to equal 9", () => {
    expect(sum(4, 5)).toBe(9);
  });
  it("the sum of 0 and 0 to equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });
  it("the sum of 4 and 5 to equal 9", () => {
    expect(sum(4, "5")).toBe(9);
  });
})

