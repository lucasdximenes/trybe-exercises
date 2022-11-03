const express = require("express");
const router = express.Router();
const activitiesRouter = require("./activities.routes");
const signupRouter = require("./signup.routes");

router.use("/activities", activitiesRouter);
router.use("/signup", signupRouter);

module.exports = router;
