# [Exercise - Software Architecture - Service](./exercise/)

🇧🇷

## To execute the project

After cloning the project, run the command below to run the containers:

```bash
docker-compose up -d
```

And to access the container terminal:

```bash
docker exec -it trybecar bash
```

## To run the tests

After accessing the container terminal, run the commands below:

```bash
npm install
npm test
```

---

## Requirements

The objective of this exercise is to refactor a project for MSC(Model, Service, Controller) architecture. This being an exercise, to refactor the Service. Unit tests were developed for the Service layer, and from them, the refactoring was performed.

### Part 1

- [x] List people drivers (service)
  - If you call getDrivers;
  - Use the Model layer to receive the list of drivers;
  - Return an object in the same pattern as the other functions of our Service layer.
- [x] Create unit tests for getDrivers function
  - Listing people drivers
  - the list of drivers is an array
  - returns the list of drivers successfully
- [x] Implement getDrivers function in Service layer
  - Call the Model layer functions as needed
  - Confirm that the function passes the tests
- [x] Create stubs to isolate tests
  - Use Model layer function stubs to isolate your tests
  - Confirm that even without a database running the tests work correctly

### Part 2

- [x] Register a car (service)

  > The function must:

  - If you call createCar;
  - Receive the model, color and license plate of the new car;
  - Return an error object if any data is not received or is invalid;
  - Use the Model layer to register a new car in the database;
  - Return an object in the same pattern as the other functions of our Service layer;

  > Parameters to be received

  - model: string with at least 3 characters ex: "Ford Ka"
  - color: string with at least 2 characters eg "Blue"
  - licensePlate: string with exactly 7 characters eg "ABC1D2E"

- [x] Create unit tests for the createCar function

  > Test Scenarios:

  - Trying to register a new car with semantic errors
    - returns an error when receiving an invalid model
    - returns an error when receiving an invalid color
    - returns an error when receiving an invalid card
  - Registering a new car successfully
    - does not return errors
    - returns the registered car

- [x] Implement createCar function in Service layer

  - Create a Joi schema and a validation function to validate the data of a new car
  - Call the Model layer functions as needed
  - Confirm that the function passes the tests

- [x] Create stubs to isolate tests
  - Use Model layer function stubs to isolate your tests
  - Confirm that even without a database running the tests work correctly

### Part 3

- [x] Register a driver person (service)

  > The function must:

  - If you call createDriver;
  - Receive the name of the driver person;
  - Optionally receive an array of car ids already registered in our database;
  - Return an error object if the name is not received or is invalid;
  - Return an error object if the cars array is invalid eg some car does not exist;
  - Use the Model layer to register the driver in the database;
  - Link the cars from the ids array (if passed) to the driver;
  - Return an object in the same pattern as the other functions of our Service layer,
  - The list of cars linked to the driver person must be returned along with the driver person's other information

  > Parameters to be received

  - name: string with at least 3 characters ex: "Gena"
  - carIds: array with the ids of the cars to be linked with the person driver (optional)

- [x] Create unit tests for the createDriver function

  > Test Scenarios:

  - Trying to register a new driver person with semantic errors
    - returns an error when receiving an invalid name
    - returns an error when receiving an invalid car list
  - Trying to register a new driver person with id errors
    - returns the error “CAR_NOT_FOUND”
    - returns the message “Some car is not found”
  - Registering a new driver person successfully without cars
    - returns the registered driver person
    - does not return error
  - Registering a new driver person successfully with cars
    - returns the cars linked to the driver person
    - does not return error

- [x] Implement createDriver function in Service layer

  - Confirm that the function passes the tests

- [x] Create stubs to isolate tests
  - Use Model layer function stubs to isolate your tests
  - Confirm that even without a database running the tests work correctly

---
