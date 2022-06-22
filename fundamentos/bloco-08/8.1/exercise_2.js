const checkLottery = (betNumber, checkNumber) => betNumber === checkNumber;

const lotteryWinner = (betNumber, checkNumber) => {
  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  return checkNumber(betNumber, randomNumber) ? "You win!" : "You lose!";
};

console.log(lotteryWinner(1, checkLottery));
