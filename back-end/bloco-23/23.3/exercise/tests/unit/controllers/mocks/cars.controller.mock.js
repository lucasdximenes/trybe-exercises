const newCar = {
  model: "Gol",
  brand: "Volkswagen",
  licensePlate: "ABC-1234",
};

const resposeNewCar = {
  id: 1,
  model: "Gol",
  brand: "Volkswagen",
  licensePlate: "ABC-1234",
};

const invalidNewCar = {
  model: "Gol",
  brand: "Volkswagen",
};

const invalidNewCarError = {
  message: "licensePlate is required",
};

module.exports = {
  newCar,
  resposeNewCar,
  invalidNewCar,
  invalidNewCarError,
};
