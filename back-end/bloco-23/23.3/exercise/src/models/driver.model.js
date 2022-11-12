const camelize = require("camelize");
const connection = require("./connection");

const findById = async (driverId) => {
  const [[result]] = await connection.execute(
    "SELECT * FROM drivers WHERE id = ?",
    [driverId]
  );
  return camelize(result);
};

const getAll = async () => {
  const [result] = await connection.execute("SELECT * FROM drivers");
  return camelize(result);
};

const insert = async (driver) => {
  const { name } = driver;
  const [{ insertId }] = await connection.execute(
    "INSERT INTO drivers (name) VALUES (?)",
    [name]
  );
  return insertId;
};

module.exports = {
  findById,
  getAll,
  insert,
};
