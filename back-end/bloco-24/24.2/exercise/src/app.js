const bodyParser = require("body-parser");
const express = require("express");
const routes = require("./routes");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);

/**
 * Substitua este comentário pelas suas rotas!
 */

module.exports = app;
