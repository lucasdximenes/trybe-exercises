const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");

const { expect } = chai;
chai.use(sinonChai);

const { carService } = require("../../../src/services");
const carController = require("../../../src/controllers/cars.controllers");

const {
  newCar,
  resposeNewCar,
  invalidNewCar,
  invalidNewCarError,
} = require("./mocks/cars.controller.mock");

describe("Verificando controller de Cars", function () {
  beforeEach(sinon.restore);

  it("Criando um carro com sucesso ", async function () {
    const res = {};
    const req = {
      body: newCar,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(carService, "createCar").resolves({
      type: null,
      message: resposeNewCar,
    });

    await carController.createCar(req, res);

    expect(res.status).to.have.been.calledWith(201);
    expect(res.json).to.have.been.calledWith(resposeNewCar);
  });

  it("Erro ao criar um carro", async function () {
    const res = {};
    const req = {
      body: invalidNewCar,
    };

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();
    sinon.stub(carService, "createCar").resolves({
      type: "INVALID_VALUE",
      message: invalidNewCarError,
    });

    await carController.createCar(req, res);

    expect(res.status).to.have.been.calledWith(422);
    expect(res.json).to.have.been.calledWith(invalidNewCarError);
  });
});
