import * as readline from "readline-sync";

type areaMeasureUnits = {
  km2: number;
  hm2: number;
  dam2: number;
  m2: number;
  dm2: number;
  cm2: number;
  mm2: number;
};

type areaUnit = keyof areaMeasureUnits;

const areaUnits: areaMeasureUnits = {
  km2: 1000000, // 1km2 = 1000000m2
  hm2: 10000, // 1hm2 = 10000m2
  dam2: 100, // 1dam2 = 100m2
  m2: 1, // 1m2 = 1m2
  dm2: 0.01, // 1dm2 = 0.01m2
  cm2: 0.0001, // 1cm2 = 0.0001m2
  mm2: 0.000001, // 1mm2 = 0.000001m2
};

const convert = (value: number, baseUnit: areaUnit, targetUnit: areaUnit) => {
  const baseValue = value * areaUnits[baseUnit]; // This is the value in meters
  const targetValue = baseValue / areaUnits[targetUnit]; // This is the value in the target unit
  return targetValue;
};

function exec() {
  const value = readline.questionFloat("Enter a value: ");
  const baseUnit = readline.question("Enter a base unit: ") as areaUnit;
  const targetUnit = readline.question("Enter a target unit: ") as areaUnit;
  const result = convert(value, baseUnit, targetUnit);
  console.log(result);
}

exec();
