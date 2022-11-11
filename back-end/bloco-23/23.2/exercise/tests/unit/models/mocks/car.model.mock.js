const newCar = {
  model: "Gol",
  color: "Preto",
  licensePlate: "ABC1234",
};

const sqlCarById = {
  id: 1,
  model: "Gol",
  color: "Preto",
  license_plate: "ABC1234",
};

const expectedCarById = {
  id: 1,
  model: "Gol",
  color: "Preto",
  licensePlate: "ABC1234",
};

module.exports = {
  newCar,
  sqlCarById,
  expectedCarById,
};
