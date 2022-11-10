const camelize = require("camelize");
const snakeize = require("snakeize");
const connection = require("./connection");

const insert = async (car) => {
  const columns = Object.keys(snakeize(car))
    .map((key) => `${key}`)
    .join(", ");

  const placeholders = Object.keys(car)
    .map((_key) => "?")
    .join(", ");

  const [{ insertId }] = await connection.execute(
    `INSERT INTO cars (${columns}) VALUE (${placeholders})`,
    [...Object.values(car)]
  );

  return insertId;
};

const findById = async (carId) => {
  const [[car]] = await connection.execute("SELECT * FROM cars WHERE id = ?", [
    carId,
  ]);
  return camelize(car);
};

module.exports = {
  insert,
  findById,
};
