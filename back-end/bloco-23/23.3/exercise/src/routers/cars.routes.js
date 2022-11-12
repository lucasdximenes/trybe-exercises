const express = require("express");
const router = express.Router();
const { createCar } = require("../controllers/cars.controllers");

router.post("/", createCar);

module.exports = router;
