const connection = require("./connection");

const insert = async (driverCar) => {
  const { driverId, carId } = driverCar;
  const [{ insertId }] = await connection.execute(
    "INSERT INTO drivers_cars (driver_id, car_id) VALUES (?, ?)",
    [driverId, carId]
  );
  return insertId;
};

module.exports = {
  insert,
};
