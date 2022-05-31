const uppercase = require("./exercicio7");

describe("teste", () => {
  it("testa uppercase", (done) => {
    uppercase('xablau', (str)=>{
      expect(str).toBe('XABLAU')
      done()
    })
  });
});
