const { getPokemonDetails } = require("./exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(
      ({ name }) => name === "xablau",
      (error, msg) => {
        expect(error).toEqual(new Error('Não temos esse pokémon para você :('))
        done();
      }
    );
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    getPokemonDetails(
      ({ name }) => name === "Charmander",
      (error, msg) => {
        expect(msg).toBe('Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember')
        done();
      }
    );
  });
});
