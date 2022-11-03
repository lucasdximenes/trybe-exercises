const express = require("express");
const {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrandId,
  getTotalChocolates,
  getChocolatesBySearchTerm,
  updateChocolate,
} = require("./helpers/getData");

const app = express();

app.use(express.json());

app.get("/chocolates", async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json(chocolates);
});

app.get("/chocolates/search", async (req, res) => {
  const { name } = req.query;
  const chocolates = await getChocolatesBySearchTerm(name);
  if (!chocolates.length) {
    return res.status(404).json(chocolates);
  }
  res.status(200).json(chocolates);
});

app.get("/chocolates/total", async (req, res) => {
  const total = await getTotalChocolates();
  res.status(200).json(total);
});

app.get("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolateById(Number(id));
  if (!chocolate) {
    return res.status(404).json({ message: "Chocolate não encontrado" });
  }
  res.status(200).json(chocolate);
});

app.get("/chocolates/brand/:id", async (req, res) => {
  const { id } = req.params;
  const chocolate = await getChocolatesByBrandId(Number(id));
  res.status(200).json(chocolate);
});

app.put("/chocolates/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  const chocolate = await updateChocolate(Number(id), { name, brandId });
  if (!chocolate) {
    return res.status(404).json({ message: "Chocolate não encontrado" });
  }
  res.status(200).json(chocolate);
});

module.exports = app;
