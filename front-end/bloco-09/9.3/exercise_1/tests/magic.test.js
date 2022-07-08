require("../simulator/fetchSimulator");
const { getMagicCard } = require("../src/magic.js");
const { card } = require("../simulator/card");

describe("Testa a função getMagicCard", () => {
  // #1-2
  it("Deve possuir a propriedade name com o valor Ancestor's Chosen", async () => {
    const response = await getMagicCard("130550");
    // implemente seus testes aqui
    expect(response.name).toBe("Ancestor's Chosen");
  });

  // #3
  it("getMagicCard should be a function", () => {
    expect(typeof getMagicCard).toBe("function");
  });

  // #4
  it("getMagicCard('130550') should call fetch", async () => {
    await getMagicCard("130550");
    expect(fetch).toHaveBeenCalled();
  });

  // #5
  it("getMagicCard('130550) should call fetch with endpoint", async () => {
    const url = "https://api.magicthegathering.io/v1/cards/130550";
    await getMagicCard("130550");
    expect(fetch).toHaveBeenCalledWith(url);
  });

  // #6
  it("getMagicCard return should be object equal to Card", async () => {
    const response = await getMagicCard("130550");
    expect(response).toEqual(card);
  });

  // #7
  it("getMagicCard('idDesconhecido') should be return an error 'Id is not found!'", async () => {
    const response = await getMagicCard("idDesconhecido");
    expect(response).toEqual(new Error("Id is not found!"));
  });
});
