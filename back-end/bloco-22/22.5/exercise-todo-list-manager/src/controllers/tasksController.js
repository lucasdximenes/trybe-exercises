const connection = require("../model/connection");

const insertTask = async (task) => {
  const { title, description } = task;
  connection.execute(`INSERT INTO tasks (title, description) VALUES (?, ?)`, [
    title,
    description,
  ]);
};

const updateTask = async (id, task) => {
  const { title, description } = task;
  connection.execute(
    `UPDATE tasks SET title = ?, description = ? WHERE id = ?`,
    [title, description, id]
  );
};

const deleteTask = async (id) => {
  connection.execute(`DELETE FROM tasks WHERE id = ?`, [id]);
};

const getAllTasks = async () => {
  const [tasks] = await connection.execute(`SELECT * FROM tasks`);
  return tasks;
};

const getTaskById = async (id) => {
  const [task] = await connection.execute(`SELECT * FROM tasks WHERE id = ?`, [
    id,
  ]);
  return task;
};

module.exports = {
  insertTask,
  updateTask,
  deleteTask,
  getAllTasks,
  getTaskById,
};
