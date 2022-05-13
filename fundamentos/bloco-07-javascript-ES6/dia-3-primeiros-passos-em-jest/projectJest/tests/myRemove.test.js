const { myRemove } = require("../script");

describe("test myRemove", () => {
  it("remove 3 from [1, 2, 3, 4] is equal to [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it("remove 3 from [1, 2, 3, 4] not equal to [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it("remove 5 from [1, 2, 3, 4] is equal to [1, 2, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
