const readline = require("readline-sync");

const fibonacci = (number) => {
  if (number === 1) return 0;
  if (number === 2) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
};

const main = () => {
  const number = readline.questionInt("Digite um número: ");
  if (number <= 0) {
    console.log("Digite um número maior que 0");
    return;
  }
  console.log(fibonacci(number));
};

main();
