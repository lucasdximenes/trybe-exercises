const checkAnswers = (correctAnswers, userAnswers) => {
  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (correctAnswers[i] === userAnswers[i]) {
      score += 1;
    } else if (userAnswers[i] === "N.A") {
      score = score;
    } else {
      score -= 0.5;
    }
  }
  return score;
};

const result = (correctAnswers, userAnswers, examNote) => {
  return `Resultado final: ${examNote(correctAnswers, userAnswers)} pontos.`;
};

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];
console.log(result(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers));
