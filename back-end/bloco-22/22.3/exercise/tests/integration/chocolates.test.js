const chai = require("chai");
const chaiHttp = require("chai-http");
const sinon = require("sinon");
const fs = require("fs").promises;
const app = require("../../src/app");
const { expect } = chai;

chai.use(chaiHttp);

const mockFile = JSON.stringify({
  brands: [
    {
      id: 1,
      name: "Lindt & Sprungli",
    },
    {
      id: 2,
      name: "Ferrero",
    },
    {
      id: 3,
      name: "Ghirardelli",
    },
  ],
  chocolates: [
    {
      id: 1,
      name: "Mint Intense",
      brandId: 1,
    },
    {
      id: 2,
      name: "White Coconut",
      brandId: 1,
    },
    {
      id: 3,
      name: "Mon Chéri",
      brandId: 2,
    },
    {
      id: 4,
      name: "Mounds",
      brandId: 3,
    },
  ],
});

describe("Testando API de chocolates", function () {
  beforeEach(function () {
    sinon.stub(fs, "readFile").resolves(mockFile);
    sinon.stub(fs, "writeFile").resolves();
  });

  afterEach(function () {
    sinon.restore();
  });

  describe("Usando o metodo GET em /chocolates", function () {
    it("Retorna a lista completa de chocolates", async function () {
      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];

      const response = await chai.request(app).get("/chocolates");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o metodo GET em /chocolates/:id para buscar o ID 4", function () {
    it("Retorna o chocolate com o ID 4", async function () {
      const output = { id: 4, name: "Mounds", brandId: 3 };

      const response = await chai.request(app).get("/chocolates/4");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o método GET em /chocolates/:id para buscar o ID 99", function () {
    it("Retorna o status 404 com a mensagem 'Chocolate não encontrado'", async function () {
      const output = { message: "Chocolate não encontrado" };

      const response = await chai.request(app).get("/chocolates/99");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1", function () {
    it("Retorna a lista de chocolates da marca com brandId 1", async function () {
      const output = [
        { id: 1, name: "Mint Intense", brandId: 1 },
        { id: 2, name: "White Coconut", brandId: 1 },
      ];

      const response = await chai.request(app).get("/chocolates/brand/1");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o metodo GET em /chocolates/total deve retornar o total de chocolates", function () {
    it("Retorna o total de chocolates", async function () {
      const output = { totalChocolates: 4 };

      const response = await chai.request(app).get("/chocolates/total");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o metodo GET em /chocolates/search?name=Mo deve retornar chocolates que contenham Mo no nome", function () {
    it("Retorna os chocolates que contenham Mo no nome", async function () {
      const output = [
        { id: 3, name: "Mon Chéri", brandId: 2 },
        { id: 4, name: "Mounds", brandId: 3 },
      ];

      const response = await chai
        .request(app)
        .get("/chocolates/search?name=Mo");

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });

    it("Retorna uma lista vazia e status 404 quando não encontrar nenhum chocolate", async function () {
      const output = [];

      const response = await chai
        .request(app)
        .get("/chocolates/search?name=abc");

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal(output);
    });
  });

  describe("Usando o metodo PUT em /chocolates/:id atualiza um chocolate", function () {
    it("Atualiza o chocolate com o ID 3", async function () {
      const output = { id: 3, name: "Mon Chéri", brandId: 2 };

      const response = await chai
        .request(app)
        .put("/chocolates/3")
        .send({ name: "Mon Chéri", brandId: 2 });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal(output);
    });

    it("Retorna o status 404 com a mensagem 'Chocolate não encontrado'", async function () {
      const output = { message: "Chocolate não encontrado" };

      const response = await chai
        .request(app)
        .put("/chocolates/99")
        .send({ name: "Mon Chéri", brandId: 2 });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.be.deep.equal(output);
    });
  });
});
