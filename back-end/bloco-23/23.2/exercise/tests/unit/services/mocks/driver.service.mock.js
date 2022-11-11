const WAITING_DRIVER = 1;
const DRIVER_ON_THE_WAY = 2;
const TRAVEL_IN_PROGRESS = 3;
const TRAVEL_FINISHED = 4;

const correctReturnTravel = {
  id: 1,
  passengerId: 1,
  driverId: null,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: "Start",
  endingAddress: "End",
  requestDate: "2022-08-24T03:04:04.374Z",
};

const busyDriver = {
  id: 1,
  passengerId: 1,
  driverId: 1,
  travelStatusId: DRIVER_ON_THE_WAY,
  startingAddress: "Start",
  endingAddress: "End",
  requestDate: "2022-08-24T03:04:04.374Z",
};

const correctReturnDriver = {
  id: 1,
  name: "drivers name",
  carId: 1,
};

const correctReturnDriversList = {
  type: null,
  message: [
    { id: 1, name: "Liana Cisneiros" },
    { id: 2, name: "Fábio Frazão" },
    { id: 3, name: "Anastacia Bicalho" },
    { id: 4, name: "Samara Granjeiro" },
    { id: 5, name: "Levi Teixeira" },
  ],
};

const correctReturnCreatedDriverWithCars = {
  type: null,
  message: {
    id: 1,
    name: "Gus",
    cars: [
      {
        id: 1,
        model: "Renault Sandero",
        color: "Branco",
        licensePlate: "NCA-0956",
      },
      {
        id: 2,
        model: "Volkswagen Gol",
        color: "Vermelho",
        licensePlate: "DZG-4376",
      },
    ],
  },
};

const correctReturnCreatedDriverWithoutCars = {
  type: null,
  message: {
    id: 1,
    name: "Gus",
    cars: [],
  },
};

const newDriverWithCars = {
  name: "Gus",
  cars: [1, 2],
};

const newDriverWithoutCars = {
  name: "Gus",
  cars: [],
};

const sqlReturnDriver = {
  id: 1,
  name: "Gus",
};

const sqlReturnCars = [
  {
    id: 1,
    model: "Renault Sandero",
    color: "Branco",
    licensePlate: "NCA-0956",
  },
  {
    id: 2,
    model: "Volkswagen Gol",
    color: "Vermelho",
    licensePlate: "DZG-4376",
  },
];

module.exports = {
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
};
