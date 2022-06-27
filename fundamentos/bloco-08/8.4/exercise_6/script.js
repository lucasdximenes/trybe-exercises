const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  // escreva seu código aqui
  return grades.map((grade, index) => {
    return {
      student: students[index],
      average: grade.reduce((a, b) => a + b) / grade.length,
    };
  });
}
console.log(studentAverage());
