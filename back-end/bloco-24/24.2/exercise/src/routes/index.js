const express = require("express");
const router = express.Router();
const accountRoutes = require("./account.routes");

router.use("/accounts", accountRoutes);

module.exports = router;
