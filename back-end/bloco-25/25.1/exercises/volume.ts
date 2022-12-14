import * as readline from "readline-sync";

type volumeMeasureUnits = {
  km3: number;
  hm3: number;
  dam3: number;
  m3: number;
  dm3: number;
  cm3: number;
  mm3: number;
};

type volumeUnit = keyof volumeMeasureUnits;

const volumeUnits: volumeMeasureUnits = {
  km3: 1000000000, // 1km3 = 1000000000000m3
  hm3: 1000000, // 1hm3 = 1000000m3
  dam3: 100, // 1dam3 = 100m3
  m3: 1, // 1m3 = 1m3
  dm3: 0.001, // 1dm3 = 0.001m3
  cm3: 0.000001, // 1cm3 = 0.000001m3
  mm3: 0.000000001, // 1mm3 = 0.000000001m3
};

const convert = (
  value: number,
  baseUnit: volumeUnit,
  targetUnit: volumeUnit
) => {
  const baseValue = value * volumeUnits[baseUnit]; // This is the value in meters
  const targetValue = baseValue / volumeUnits[targetUnit]; // This is the value in the target unit
  return targetValue;
};

function exec() {
  const value = readline.questionFloat("Enter a value: ");
  const baseUnit = readline.question("Enter a base unit: ") as volumeUnit;
  const targetUnit = readline.question("Enter a target unit: ") as volumeUnit;
  const result = convert(value, baseUnit, targetUnit);
  console.log(result);
}

exec();
