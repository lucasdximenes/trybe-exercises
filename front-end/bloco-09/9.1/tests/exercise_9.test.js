// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("../exercise_8/script.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    getPokemonDetails(
      ({ name }) => name === "not-a-pokemon",
      (error, message) => {
        expect(error).toEqual(new Error("Não temos esse pokémon para você :("));
        expect(message).toBeNull();
        done();
      }
    );
  });

  it("retorna um pokemon que existe no banco de dados", () => {
    // Escreva aqui seu código
    getPokemonDetails(
      ({ name }) => name === "Bulbasaur",
      (error, message) => {
        expect(error).toBeNull();
        expect(message).toEqual(
          "Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf"
        );
      }
    );
  });
});
