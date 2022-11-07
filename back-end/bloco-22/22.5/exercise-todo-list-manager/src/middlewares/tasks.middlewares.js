const tasksController = require("../controllers/tasksController");

const validateIfTaskExists = async (req, res, next) => {
  const { id } = req.params;
  const task = await tasksController.getTaskById(Number(id));
  if (!task.length) {
    return res.status(404).json({ message: "Not found" });
  }
  return next();
};

const validateTask = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "title and description are required" });
  }
  return next();
};

module.exports = {
  validateIfTaskExists,
  validateTask,
};
