const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");
const tasksMiddlewares = require("../middlewares/tasks.middlewares");

router.post("/", tasksMiddlewares.validateTask, async (req, res) => {
  const { title, description } = req.body;
  const task = { title, description };
  await tasksController.insertTask(task);
  return res.status(201).json(task);
});

router.put(
  "/:id",
  tasksMiddlewares.validateIfTaskExists,
  tasksMiddlewares.validateTask,
  async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    const task = { title, description };
    await tasksController.updateTask(Number(id), task);
    return res.status(200).json(task);
  }
);

router.delete(
  "/:id",
  tasksMiddlewares.validateIfTaskExists,
  async (req, res) => {
    const { id } = req.params;
    await tasksController.deleteTask(Number(id));
    return res.status(204).end();
  }
);

router.get("/", async (req, res) => {
  const tasks = await tasksController.getAllTasks();
  return res.status(200).json(tasks);
});

router.get("/:id", tasksMiddlewares.validateIfTaskExists, async (req, res) => {
  const { id } = req.params;
  const task = await tasksController.getTaskById(Number(id));
  return res.status(200).json(task);
});

module.exports = router;
