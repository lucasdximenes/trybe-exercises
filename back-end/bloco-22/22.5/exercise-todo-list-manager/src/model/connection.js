const mysql = require("mysql2/promise");

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE_NAME,
  MYSQL_WAIT_FOR_CONNECTIONS,
  MYSQL_CONNECTION_LIMIT,
  MYSQL_QUEUE_LIMIT,
} = process.env;

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE_NAME,
  waitForConnections: MYSQL_WAIT_FOR_CONNECTIONS,
  connectionLimit: MYSQL_CONNECTION_LIMIT,
  queueLimit: MYSQL_QUEUE_LIMIT,
});

module.exports = connection;
