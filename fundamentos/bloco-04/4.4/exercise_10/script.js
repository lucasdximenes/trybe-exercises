function biggestOfThree(firstNum, secondNum, thirdNum) {
    if (firstNum > secondNum && firstNum > thirdNum) {
        return "O maior número é: " + firstNum;
    } else if (secondNum > firstNum && secondNum > thirdNum) {
        return "O maior número é: " + secondNum;
    } else {
        return "O maior número é: " + thirdNum;
    }
}
