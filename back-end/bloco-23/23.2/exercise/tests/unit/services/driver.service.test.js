const { expect } = require("chai");
const sinon = require("sinon");
const travelModel = require("../../../src/models/travel.model");
const driveDB = require("../../../src/models/driver.model");
const driver = require("../../../src/services/driver.service");
const { carModel, driverCarModel } = require("../../../src/models");
const {
  correctReturnTravel,
  busyDriver,
  correctReturnDriver,
  correctReturnDriversList,
  correctReturnCreatedDriverWithCars,
  correctReturnCreatedDriverWithoutCars,
  newDriverWithCars,
  newDriverWithoutCars,
  sqlReturnDriver,
  sqlReturnCars,
} = require("./mocks/driver.service.mock");

const DRIVER_ON_THE_WAY = 2;

describe("Verificando service Driver", function () {
  /* Validar se os IDs recebidos são existentes */
  describe("Atribuições de viagem com erros de id inexistente", function () {
    it("estão falhando ao tentar atribuir uma viagem com viajante inexistente", async function () {
      sinon.stub(travelModel, "findById").resolves(undefined);

      const body = { travelId: 99999, driverId: 1 };
      const error = await driver.travelAssign(body);

      expect(error.type).to.equal("TRAVEL_NOT_FOUND");
      expect(error.message).to.equal("travel id not found");
    });

    it("estão falhando ao tentar atribuir uma viagem com motorista inexistente", async function () {
      sinon.stub(travelModel, "findById").resolves(correctReturnTravel);
      sinon.stub(driveDB, "findById").resolves(undefined);

      const body = { travelId: 1, driverId: 99999 };
      const error = await driver.travelAssign(body);

      expect(error.type).to.equal("DRIVER_NOT_FOUND");
      expect(error.message).to.equal("driver id not found");
    });
  });

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra viajem */
  describe("Atribuições de viagem com motorista ocupado", function () {
    it("esta falhando ao tentar iniciar uma viagem com motorista ocupado", async function () {
      sinon
        .stub(travelModel, "findById")
        .onFirstCall()
        .resolves(correctReturnTravel)
        .onSecondCall()
        .resolves(busyDriver);
      sinon.stub(driveDB, "findById").resolves(correctReturnDriver);

      const body = { travelId: 1, driverId: 1 };
      const error = await driver.travelAssign(body);

      expect(error.type).to.equal("TRAVEL_CONFLICT");
      expect(error.message).to.equal("travel already assigned");
      sinon.restore();
    });
  });

  /* Validar se podemos atribuir uma viagem com sucesso */
  describe("Atribuições de viagem com sucesso", function () {
    it("estão atribuindo com sucesso", async function () {
      sinon.stub(travelModel, "updateById").resolves(true);
      sinon.stub(travelModel, "findById").resolves(correctReturnTravel);
      sinon.stub(driveDB, "findById").resolves(correctReturnDriver);

      const body = { travelId: 1, driverId: 1 };
      const travel = await driver.travelAssign(body);

      expect(travel.message).to.deep.equal({
        id: 1,
        passengerId: 1,
        driverId: null,
        travelStatusId: DRIVER_ON_THE_WAY,
        startingAddress: "Start",
        endingAddress: "End",
        requestDate: "2022-08-24T03:04:04.374Z",
      });
      sinon.restore();
    });
  });

  describe("Listagem de motoristas", function () {
    it("está retornando uma lista de motoristas", async function () {
      sinon.stub(driveDB, "getAll").resolves([
        { id: 1, name: "Liana Cisneiros" },
        { id: 2, name: "Fábio Frazão" },
        { id: 3, name: "Anastacia Bicalho" },
        { id: 4, name: "Samara Granjeiro" },
        { id: 5, name: "Levi Teixeira" },
      ]);

      const drivers = await driver.getDrivers();

      expect(drivers).to.deep.equal(correctReturnDriversList);

      sinon.restore();
    });

    it("A lista de motoristas é um array", async function () {
      sinon.stub(driveDB, "getAll").resolves([
        { id: 1, name: "Liana Cisneiros" },
        { id: 2, name: "Fábio Frazão" },
        { id: 3, name: "Anastacia Bicalho" },
        { id: 4, name: "Samara Granjeiro" },
        { id: 5, name: "Levi Teixeira" },
      ]);

      const drivers = await driver.getDrivers();

      expect(drivers.message).to.be.an("array");

      sinon.restore();
    });
  });

  describe("Criação de motorista", function () {
    afterEach(function () {
      sinon.restore();
    });

    it("Está criando um motorista com carros com sucesso", async function () {
      sinon.stub(driveDB, "insert").resolves([[{ insertId: 1 }]]);
      sinon.stub(driveDB, "findById").resolves(sqlReturnDriver);
      sinon.stub(driverCarModel, "insert").resolves();
      sinon
        .stub(carModel, "findById")
        .onCall(0)
        .resolves(sqlReturnCars[0])
        .onCall(1)
        .resolves(sqlReturnCars[1])
        .onCall(2)
        .resolves(sqlReturnCars[0])
        .onCall(3)
        .resolves(sqlReturnCars[1]);

      const newDriver = await driver.createDriver(newDriverWithCars);

      expect(newDriver).to.deep.equal(correctReturnCreatedDriverWithCars);

      sinon.restore();
    });

    it("Está criando um motorista sem carros com sucesso", async function () {
      sinon.stub(driveDB, "insert").resolves([[{ insertId: 1 }]]);
      sinon.stub(driveDB, "findById").resolves(sqlReturnDriver);

      const newDriver = await driver.createDriver(newDriverWithoutCars);

      expect(newDriver).to.deep.equal(correctReturnCreatedDriverWithoutCars);

      sinon.restore();
    });

    it("Erro ao criar um motorista com carros inexistente", async function () {
      sinon.stub(driveDB, "insert").resolves([[{ insertId: 1 }]]);
      sinon.stub(driveDB, "findById").resolves(sqlReturnDriver);
      sinon.stub(driverCarModel, "insert").resolves();
      sinon.stub(carModel, "findById").resolves(undefined);

      const newDriver = await driver.createDriver(newDriverWithCars);

      expect(newDriver.type).to.equal("CAR_NOT_FOUND");
      expect(newDriver.message).to.equal("some car is not found");

      sinon.restore();
    });

    it("Erro ao criar um motorista com dados inválidos", async function () {
      const newDriver = await driver.createDriver({
        name: "l",
        cars: [1, 2],
      });

      expect(newDriver.type).to.equal("INVALID_VALUE");
      expect(newDriver.message).to.equal(
        '"name" length must be at least 3 characters long'
      );

      sinon.restore();
    });

    it("Erro ao criar um motorista com dados inválidos", async function () {
      const newDriver = await driver.createDriver({
        name: "lucas",
        cars: ["a", "b"],
      });

      expect(newDriver.type).to.equal("INVALID_VALUE");
      expect(newDriver.message).to.equal('"cars[0]" must be a number');

      sinon.restore();
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
