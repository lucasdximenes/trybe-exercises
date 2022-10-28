const readline = require("readline-sync");

const weight = readline.questionFloat("What's your weight? (in kg) ");
const height = readline.questionFloat("What's your height? (in m) ");

const bmi = weight / height ** 2;

if (bmi < 18.5) {
  console.log("Underweight: ", bmi);
} else if (bmi < 25) {
  console.log("Normal weight: ", bmi);
} else if (bmi < 30) {
  console.log("Overweight: ", bmi);
} else if (bmi < 35) {
  console.log("Obese Class I (Moderately obese): ", bmi);
} else if (bmi < 40) {
  console.log("Obese Class II (Severely obese): ", bmi);
} else {
  console.log("Obese Class III (Very severely obese): ", bmi);
}
