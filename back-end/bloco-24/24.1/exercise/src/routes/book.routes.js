const express = require("express");
const router = express.Router();
const bookControllers = require("../controllers/BooksController");

router.get("/", bookControllers.getAll);
router.get("/:id", bookControllers.getById);
router.post("/", bookControllers.create);
router.put("/:id", bookControllers.update);
router.delete("/:id", bookControllers.remove);

module.exports = router;
