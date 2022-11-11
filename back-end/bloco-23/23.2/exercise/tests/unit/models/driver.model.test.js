const sinon = require("sinon");
const { expect } = require("chai");
const { driverModel } = require("../../../src/models");
const connection = require("../../../src/models/connection");
const { drivers } = require("./mocks/driver.model.mock");

describe("Testes de unidade do model de motoristas", function () {
  afterEach(sinon.restore);

  it("Recuperando a lista de motoristas", async function () {
    sinon.stub(connection, "execute").resolves([drivers]);
    const result = await driverModel.getAll();
    expect(result).to.be.deep.equal(drivers);
  });

  it("A lista de motoristas tem que ser um array", async function () {
    sinon.stub(connection, "execute").resolves([drivers]);
    const result = await driverModel.getAll();
    expect(result).to.be.an("array");
  });

  it("Recuperando um motorista pelo id", async function () {
    sinon.stub(connection, "execute").resolves([[drivers[0]]]);
    const result = await driverModel.findById(1);
    expect(result).to.be.deep.equal(drivers[0]);
  });

  it("Cadastra um motorista e retorna o id", async function () {
    sinon.stub(connection, "execute").resolves([{ insertId: 1 }]);
    const result = await driverModel.insert(drivers[0]);
    expect(result).to.be.equal(1);
  });
});
