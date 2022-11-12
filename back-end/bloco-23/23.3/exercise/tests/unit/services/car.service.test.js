const sinon = require("sinon");
const { expect } = require("chai");
const { carService } = require("../../../src/services");
const { carModel } = require("../../../src/models");
const {
  correctNewCar,
  correctReturnCreatedCar,
  SQLCorrectReturnCreatedCar,
  correctReturnErrorModelCreateCar,
  correctReturnErrorColorCreateCar,
  correctReturnErrorLicensePlateCreateCar,
} = require("./mocks/car.service.mock");

describe("Verificando service Car", function () {
  afterEach(sinon.restore);

  describe("Criação de carros com erros de valores inválidos", function () {
    it("está falhando ao tentar criar um carro com modelo menor que 3 caracteres", async function () {
      const car = { model: "a", color: "Branco", licensePlate: "ABC1A2B" };
      const error = await carService.createCar(car);

      expect(error).to.deep.equal(correctReturnErrorModelCreateCar);
    });

    it("está falhando ao tentar criar um carro com cor menor que 2 caracteres", async function () {
      const car = {
        model: "Chevrolet Monza",
        color: "B",
        licensePlate: "ABC1A2B",
      };
      const error = await carService.createCar(car);

      expect(error).to.deep.equal(correctReturnErrorColorCreateCar);
    });

    it("está falhando ao tentar criar um carro com placa menor que 7 caracteres", async function () {
      const car = {
        model: "Chevrolet Monza",
        color: "Branco",
        licensePlate: "ABC1A2",
      };
      const error = await carService.createCar(car);

      expect(error).to.deep.equal(correctReturnErrorLicensePlateCreateCar);
    });
  });

  describe("Criação de carros com sucesso", function () {
    it("está criando um carro com sucesso", async function () {
      sinon.stub(carModel, "insert").resolves([[{ insertId: 1 }]]);
      sinon.stub(carModel, "findById").resolves([SQLCorrectReturnCreatedCar]);

      const car = await carService.createCar(correctNewCar);

      expect(car).to.deep.equal(correctReturnCreatedCar);
    });
  });
});
