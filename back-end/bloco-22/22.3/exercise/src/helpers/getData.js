const fs = require("fs").promises;
const { join } = require("path");
const filePath = join(__dirname, "../db/cacauData.json");

const readCacauDataFile = async () => {
  const fileContent = await fs.readFile(filePath, "utf8");
  return JSON.parse(fileContent);
};

const writeCacauDataFile = async (data) => {
  await fs.writeFile(filePath, JSON.stringify(data));
};

const getAllChocolates = async () => {
  const cacauData = await readCacauDataFile();
  return cacauData.chocolates;
};

const getChocolateById = async (id) => {
  const chocolates = await getAllChocolates();
  const chocolate = chocolates.find((chocolate) => chocolate.id === id);
  return chocolate;
};

const getChocolatesByBrandId = async (id) => {
  const chocolates = await getAllChocolates();
  const chocolate = chocolates.filter((chocolate) => chocolate.brandId === id);
  return chocolate;
};

const getTotalChocolates = async () => {
  const chocolates = await getAllChocolates();
  return { totalChocolates: chocolates.length };
};

const getChocolatesBySearchTerm = async (searchTerm) => {
  const chocolates = await getAllChocolates();
  const filteredChocolates = chocolates.filter(({ name }) => {
    return name.toLowerCase().includes(searchTerm.toLowerCase());
  });
  return filteredChocolates;
};

const updateChocolate = async (id, changes = {}) => {
  const data = await readCacauDataFile();
  const chocolateIndex = data.chocolates.findIndex(
    (chocolate) => chocolate.id === id
  );
  if (chocolateIndex === -1) {
    return null;
  }
  const chocolate = data.chocolates[chocolateIndex];
  const updatedChocolate = { ...chocolate, ...changes };
  data.chocolates[chocolateIndex] = updatedChocolate;
  await writeCacauDataFile(data);
  return updatedChocolate;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrandId,
  getTotalChocolates,
  getChocolatesBySearchTerm,
  updateChocolate,
};
