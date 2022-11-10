# [Exercise - Software Architecture - Model](./exercise/)

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

The objective of this exercise is to refactor a project for MSC(Model, Service, Controller) architecture. This being an exercise, to refactor the Model layer. Unit tests were developed for the Model layer, and from them, the refactoring was performed.

## Requirements

- [x] 1 - Create unit test of the Model layer responsible for listing the drivers registered in the database
  - [x] 1.1 - The function returns an array
  - [x] 1.2 - The function returns a list in a given format
- [x] 2 - Create the Model layer responsible for listing the drivers people

- [x] 3 - Create unit tests of the model layer responsible for registering a car in the database
  - [x] 3.1 - The function returns the id of the registered car
- [x] 4 - Create the Model layer responsible for registering a car in the database

- [x] 5 - Create unit tests of the model layer responsible for finding a car by id
  - [x] 5.1 - The function returns a car
  - [x] 5.2 - The function returns a car in a given format
- [x] 6 - Create the Model layer responsible for finding a car by id

- [x] 7 - Create unit tests of the model layer responsible for finding a driver by id
  - [x] 7.1 - The function returns a driver
  - [x] 7.2 - The function returns a driver in a given format
- [x] 8 - Create the Model layer responsible for finding a driver by id

- [x] 9 - Create unit tests of the model layer responsible for registering a driver in the database
  - [x] 9.1 - The function returns the registered driver id
- [x] 10 - Create the Model layer responsible for registering a driver in the database

- [x] 11 - Create unit tests of the model layer responsible for creating the N:N relationship between driver and car
  - [x] 11.1 - The function returns the id of the registered relationship
- [x] 12 - Create the Model layer responsible for creating the N:N relationship between driver and car
