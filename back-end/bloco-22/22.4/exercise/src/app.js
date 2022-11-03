const express = require("express");
require("express-async-errors");
const routes = require("./routes");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(routes);
app.use(morgan("combined"));

app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
