const express = require("express");
const router = express.Router();
const accountController = require("../controllers/account.controller");
const accountMiddlewares = require("../middlewares/account.middlewares");

router.get("/:id", accountController.getAccountById);
router.get("/:id/comments", accountController.getCommentsByAccountId);
router.post(
  "/",
  accountMiddlewares.validateAccountData,
  accountController.createAccount
);
router.post(
  "/:id/comments",
  accountMiddlewares.validateCommentData,
  accountController.createComment
);

module.exports = router;
