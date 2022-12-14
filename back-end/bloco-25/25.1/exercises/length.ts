import * as readline from "readline-sync";

type measureUnits = {
  km: number;
  hm: number;
  dam: number;
  m: number;
  dm: number;
  cm: number;
  mm: number;
};

type Unit = keyof measureUnits;

const units: measureUnits = {
  km: 1000, // 1km = 1000m
  hm: 100, // 1hm = 100m
  dam: 10, // 1dam = 10m
  m: 1, // 1m = 1m
  dm: 0.1, // 1dm = 0.1m
  cm: 0.01, // 1cm = 0.01m
  mm: 0.001, // 1mm = 0.001m
};

const convert = (value: number, baseUnit: Unit, targetUnit: Unit) => {
  const baseValue = value * units[baseUnit]; // This is the value in meters
  const targetValue = baseValue / units[targetUnit]; // This is the value in the target unit
  return targetValue;
};

function exec() {
  const value = readline.questionFloat("Enter a value: ");
  const baseUnit = readline.question("Enter a base unit: ") as Unit;
  const targetUnit = readline.question("Enter a target unit: ") as Unit;
  const result = convert(value, baseUnit, targetUnit);
  console.log(result);
}

exec();
