const readline = require("readline-sync");

const calculate = async (a, b, c) => {
  return new Promise((resolve, reject) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      reject("Informe apenas números");
    }
    const result = (a + b) * c;
    if (result < 50) {
      return reject("Valor muito baixo");
    }
    resolve(result);
  });
};

async function main(a, b, c) {
  try {
    const result = await calculate(a, b, c);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const a = readline.questionInt("Digite o primeiro número: ");
const b = readline.questionInt("Digite o segundo número: ");
const c = readline.questionInt("Digite o terceiro número: ");

main(a, b, c);
