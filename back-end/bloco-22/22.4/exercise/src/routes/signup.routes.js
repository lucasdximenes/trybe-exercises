const express = require("express");
const router = express.Router();
const validateUser = require("../middlewares/validateUser.middleware");
const crypto = require("crypto");

router.post("/", validateUser, (_req, res) => {
  const token = crypto.randomBytes(8).toString("hex");
  res.status(201).json({ token });
});

module.exports = router;
