# [Exercise - Software Architecture - Controller](./exercise/)

---

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

The objective of this exercise is to refactor a project for MSC(Model, Service, Controller) architecture. This being an exercise, to refactor the Controller layer. Unit tests were developed for the Controller layer, and from them, the refactoring was performed.

### Part 1

1. Develop the **tests** of the `driverController.getDrivers()` function, which is responsible for fetching all registered drivers. The `driverController.getDrivers()` function must use the controller layer.

2. Develop the getDrivers function so that it passes our tests.

3. Create the _GET_ `/drivers` route

### Part 2

1. Develop the **tests** of the `driverController.createDriver()` function, which is responsible for registering a new driver.

2. Develop the `createDriver` function so that it passes our tests.

3. Create the _POST_ `/drivers` route

### Part 3

1. Develop tests of the `carController.createCar()` function, which is responsible for registering a new car.

2. Develop the `createCar` function so that it passes our tests.

3. Create the _POST_ `/cars` route

---
