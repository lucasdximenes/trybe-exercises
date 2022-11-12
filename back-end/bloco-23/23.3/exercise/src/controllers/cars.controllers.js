const { carService } = require("../services");
const errorMap = require("../utils/errorMap");

const createCar = async (req, res) => {
  const { type, message } = await carService.createCar(req.body);
  if (type) {
    return res.status(errorMap.mapError(type)).json(message);
  }

  return res.status(201).json(message);
};

module.exports = {
  createCar,
};
