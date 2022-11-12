const {
  travelModel,
  driverModel,
  carModel,
  driverCarModel,
} = require("../models");
const {
  validateInputValues,
  validateAlreadyDriver,
  validateNewDriver,
} = require("./validations/validationsInputValues");

const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const getWaitingDriverTravels = async () => {
  const result = await travelModel.findByTravelStatusId(WAITING_DRIVER);
  return { type: null, message: result };
};

/* Aceitar a viagem; */
const travelAssign = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  let error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Validar se o motorista que esta tentando pegar uma viagem, não esta em outra */
  error = await validateAlreadyDriver(travelId);
  if (error.type) return error;

  /* Alterar o status de "aguardando motorista" para "motorista a caminho" */
  await travelModel.updateById(travelId, {
    driverId,
    travelStatusId: DRIVER_ON_THE_WAY,
  });
  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result };
};

/* Iniciar a viagem; */
const startTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "motorista a caminho" para "viagem em andamento" */
  await travelModel.updateById(travelId, {
    driverId,
    travelStatusId: TRAVEL_IN_PROGRESS,
  });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result };
};

/* Encerrar a viagem; */
const endTravel = async ({ travelId, driverId }) => {
  /* Validar se travelId e driverId são ids EXISTENTES */
  const error = await validateInputValues({ travelId, driverId });
  if (error.type) return error;

  /* Alterar o status de "viagem em andamento" para "viagem finalizada" */
  await travelModel.updateById(travelId, {
    driverId,
    travelStatusId: TRAVEL_FINISHED,
  });

  /* Retornar os dados gravados no banco, para fins de relatório em tela */
  const result = await travelModel.findById(travelId);
  return { type: null, message: result };
};

const getDrivers = async () => {
  const result = await driverModel.getAll();
  return { type: null, message: result };
};

const createDriver = async (driver) => {
  const error = await validateNewDriver(driver);
  if (error.type) return error;

  const { name, cars } = driver;
  const driverId = await driverModel.insert({ name });
  const newDriver = await driverModel.findById(driverId);

  if (cars) {
    const findedCars = await Promise.all(
      cars.map(async (car) => {
        const returnedCar = await carModel.findById(car);
        return returnedCar;
      })
    ).then((cars) => cars);

    await Promise.all(
      cars.map(async (car) => {
        await driverCarModel.insert({ driverId, carId: car });
      })
    );

    newDriver.cars = findedCars;
  }

  return { type: null, message: newDriver };
};

module.exports = {
  travelAssign,
  startTravel,
  endTravel,
  getWaitingDriverTravels,
  getDrivers,
  createDriver,
};
