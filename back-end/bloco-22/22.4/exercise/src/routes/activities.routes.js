const express = require("express");
const router = express.Router();
const {
  validateName,
  validatePrice,
  validateDescription,
  validateRating,
  validateDifficulty,
  validateCreatedAt,
  validateToken,
} = require("../middlewares/validateActivity.middleware");

router.post(
  "/",
  validateToken,
  validateName,
  validatePrice,
  validateDescription,
  validateRating,
  validateDifficulty,
  validateCreatedAt,
  (_req, res) => {
    res.status(201).json({ message: "Activity created successfully" });
  }
);

module.exports = router;
