const fs = require("fs").promises;

const data = fs.readFile("./simpsons.json", "utf-8");

const allSimpsons = async () => {
  const simpsons = JSON.parse(await data);
  simpsons.forEach(({ id, name }) => console.log(`${id} - ${name}`));
};

// allSimpsons();

const simpsonById = async (id) => {
  const simpsons = JSON.parse(await data);
  const simpson = simpsons.find((simpson) => simpson.id === id);
  return new Promise((resolve, reject) => {
    if (simpson) {
      resolve(simpson);
    } else {
      reject(new Error("id não encontrado"));
    }
  });
};

// simpsonById("1").then((simpson) => console.log(simpson));

const removeSimpsonsId10And6 = async () => {
  const simpsons = JSON.parse(await data);
  const simpsonsFiltered = simpsons.filter(
    (simpson) => simpson.id !== "10" && simpson.id !== "6"
  );
  await fs.writeFile("./simpsons.json", JSON.stringify(simpsonsFiltered));
};

// removeSimpsonsId10And6();

const createSimpsonFamily = async () => {
  const simpsons = JSON.parse(await data);
  const simpsonsFiltered = simpsons.filter((simpson) => {
    const { id } = simpson;
    return id === "1" || id === "2" || id === "3" || id === "4";
  });
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFiltered));
};

// createSimpsonFamily();

const addNelsonMuntzToSimpsonsFamily = async () => {
  const simpsonsFamily = JSON.parse(await fs.readFile("./simpsonsFamily.json"));
  const nelsonMuntz = {
    id: "8",
    name: "Nelson Muntz",
  };
  simpsonsFamily.push(nelsonMuntz);
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(simpsonsFamily));
};

// addNelsonMuntzToSimpsonsFamily();

const replaceMaggieByNelson = async () => {
  const simpsonsFamily = JSON.parse(await fs.readFile("./simpsonsFamily.json"));
  let replace = simpsonsFamily.map((simpson) => {
    if (simpson.id === "8") {
      simpson.id = "5";
      simpson.name = "Maggie Simpson";
    }
    return simpson;
  });
  await fs.writeFile("./simpsonsFamily.json", JSON.stringify(replace));
};

// replaceMaggieByNelson();
