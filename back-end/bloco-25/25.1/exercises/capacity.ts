import * as readline from "readline-sync";

type capacityMeasureUnits = {
  kl: number;
  hl: number;
  dal: number;
  l: number;
  dl: number;
  cl: number;
  ml: number;
};

type capacityUnit = keyof capacityMeasureUnits;

const capacityUnits: capacityMeasureUnits = {
  kl: 1000, // 1kl = 1000l
  hl: 100, // 1hl = 100l
  dal: 10, // 1dal = 10l
  l: 1, // 1l = 1l
  dl: 0.1, // 1dl = 0.1l
  cl: 0.01, // 1cl = 0.01l
  ml: 0.001, // 1ml = 0.001l
};

const convert = (
  value: number,
  baseUnit: capacityUnit,
  targetUnit: capacityUnit
) => {
  const baseValue = value * capacityUnits[baseUnit]; // This is the value in liters
  const targetValue = baseValue / capacityUnits[targetUnit]; // This is the value in the target unit
  return targetValue;
};

function exec() {
  const value = readline.questionFloat("Enter a value: ");
  const baseUnit = readline.question("Enter a base unit: ") as capacityUnit;
  const targetUnit = readline.question("Enter a target unit: ") as capacityUnit;
  const result = convert(value, baseUnit, targetUnit);
  console.log(result);
}

exec();
