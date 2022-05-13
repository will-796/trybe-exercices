const { encode, decode } = require("../script");

describe("test encode and decode", () => {
  it("encode is a funcion", () => {
    expect(typeof encode).toBeTruthy();
  });
  it("encode input aeiou return 12345", () => {
    expect(encode("aeiou")).toBe("12345");
  });
  it("decode input 12345 return aeiou", () => {
    expect(decode("12345")).toBe("aeiou");
  });
  it("encode input bcdfg return bcdfg", () => {
    expect(encode("bcdfg")).toBe("bcdfg");
  });
  it("decode input 67890 return 67890", () => {
    expect(decode("67890")).toBe("67890");
  });
  it("test length encode", () => {
    expect(encode("testemaluco").length).toBe(11);
  });
  it("test length decode", () => {
    expect(encode("123456789").length).toBe(9);
  });
});
