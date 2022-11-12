const sinon = require("sinon");
const { expect } = require("chai");
const { driverCarModel } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const { payload } = require("./mocks/driverCar.model.mock");

describe("Testes de unidade do model de motoristas e carros", function () {
  afterEach(sinon.restore);

  it("Cadastra relacionamento entre motorista e carro", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const result = await driverCarModel.insert(payload);
    expect(result).to.be.equal(1);
  });
});
