const { saveFavoriteMagicCard } = require("../src/magic.js");
const favoriteCards = require("../data/favoriteCards.js");

const retrievesFavoriteCards = () => {
  // implemente sua função aqui
  // #5
  return favoriteCards.splice(4);
};

// # Bonus - 1
const nameOfCards = favoriteCards.map((card) => card.name);

describe(" Testa a função saveFavoriteMagicCard", () => {
  afterEach(() => {
    retrievesFavoriteCards();
  });

  it("Testa se um novo card é adicionado a cada execução", async () => {
    expect.assertions(3);

    // implemente seus testes aqui
    // #1
    await saveFavoriteMagicCard("130553");
    expect(favoriteCards.length).toBe(5);

    // #2
    expect(favoriteCards[favoriteCards.length - 1].name).toBe(
      "Beacon of Immortality"
    );

    // #3
    await saveFavoriteMagicCard("130553");
    expect(favoriteCards.length).toBe(6);
  });

  it("Deve retornar favoriteCards contendo apenas os cards favoritos iniciais", () => {
    expect.assertions(2);
    // #4
    expect(favoriteCards).toHaveLength(4);
    // implemente seus testes aqui

    // # Bonus - 2
    expect(nameOfCards).toEqual([
      "Ancestor's Chosen",
      "Angel of Mercy",
      "Aven Cloudchaser",
      "Ballista Squad",
    ]);
  });
});
