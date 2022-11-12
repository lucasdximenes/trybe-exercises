const express = require("express");
const { driverRouter, passengerRouter, carsRouter } = require("./routers");

const app = express();

app.use(express.json());
app.use("/passengers", passengerRouter);
app.use("/drivers", driverRouter);
app.use("/cars", carsRouter);

module.exports = app;
