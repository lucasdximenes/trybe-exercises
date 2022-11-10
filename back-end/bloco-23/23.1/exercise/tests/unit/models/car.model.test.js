const sinon = require("sinon");
const { expect } = require("chai");
const { carModel } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const {
  newCar,
  sqlCarById,
  expectedCarById,
} = require("./mocks/car.model.mock");

describe("Testes de unidade do model de carros", function () {
  afterEach(sinon.restore);

  it("Cadastrar um carro retorna o id do carro cadastrado", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const result = await carModel.insert(newCar);
    expect(result).to.equal(1);
  });

  it("Retorna um carro pelo id", async function () {
    sinon.stub(connection, "execute").resolves([[sqlCarById]]);
    const result = await carModel.findById(1);
    expect(result).to.deep.equal(expectedCarById);
  });
});
