const { carModel } = require("../models");
const { validateNewCar } = require("./validations/validationsInputValues");

const createCar = async (car) => {
  const error = validateNewCar(car);
  if (error.type) return error;

  const createdCarId = await carModel.insert(car);
  const createdCar = await carModel.findById(createdCarId);

  return { type: null, message: createdCar[0] };
};

module.exports = {
  createCar,
};
