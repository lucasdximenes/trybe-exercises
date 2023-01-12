import * as readline from "readline-sync";

type massMeasureUnits = {
  kg: number;
  hg: number;
  dag: number;
  g: number;
  dg: number;
  cg: number;
  mg: number;
};

type massUnit = keyof massMeasureUnits;

const massUnits: massMeasureUnits = {
  kg: 1000, // 1kg = 1000g
  hg: 100, // 1hg = 100g
  dag: 10, // 1dag = 10g
  g: 1, // 1g = 1g
  dg: 0.1, // 1dg = 0.1g
  cg: 0.01, // 1cg = 0.01g
  mg: 0.001, // 1mg = 0.001g
};

const convert = (value: number, baseUnit: massUnit, targetUnit: massUnit) => {
  const baseValue = value * massUnits[baseUnit]; // This is the value in grams
  const targetValue = baseValue / massUnits[targetUnit]; // This is the value in the target unit
  return targetValue;
};

function exec() {
  const value = readline.questionFloat("Enter a value: ");
  const baseUnit = readline.question("Enter a base unit: ") as massUnit;
  const targetUnit = readline.question("Enter a target unit: ") as massUnit;
  const result = convert(value, baseUnit, targetUnit);
  console.log(result);
}

exec();
