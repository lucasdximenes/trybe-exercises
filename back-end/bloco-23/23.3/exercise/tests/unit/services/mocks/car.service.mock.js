const correctReturnCreatedCar = {
  type: null,
  message: {
    id: 1,
    model: "Chevrolet Monza",
    color: "Branco",
    licensePlate: "ABC1A2B",
  },
};

const correctNewCar = {
  model: "Chevrolet Monza",
  color: "Branco",
  licensePlate: "ABC1A2B",
};

const SQLCorrectReturnCreatedCar = {
  id: 1,
  model: "Chevrolet Monza",
  color: "Branco",
  licensePlate: "ABC1A2B",
};

const correctReturnErrorModelCreateCar = {
  type: "INVALID_VALUE",
  message: '"model" length must be at least 3 characters long',
};

const correctReturnErrorColorCreateCar = {
  type: "INVALID_VALUE",
  message: '"color" length must be at least 2 characters long',
};

const correctReturnErrorLicensePlateCreateCar = {
  type: "INVALID_VALUE",
  message: '"licensePlate" length must be 7 characters long',
};

module.exports = {
  correctNewCar,
  correctReturnCreatedCar,
  SQLCorrectReturnCreatedCar,
  correctReturnErrorModelCreateCar,
  correctReturnErrorColorCreateCar,
  correctReturnErrorLicensePlateCreateCar,
};
