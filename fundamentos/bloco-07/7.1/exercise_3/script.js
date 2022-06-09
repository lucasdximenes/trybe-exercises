// Iterative solution
// const iterativeFactorial = (num) => {
//   let result = 1;
//   for (let i = 1; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// Recursive factorial explanation:
// step 1: CALL factorial(5) = 5 * factorial(4)   step 10: RETURN 5 * 24 = 120
// step 2: CALL factorial(4) = 4 * factorial(3)   step 9: RETURN 4 * 6 = 24
// step 3: CALL factorial(3) = 3 * factorial(2)   step 8: RETURN 3 * 2 = 6
// step 4: CALL factorial(2) = 2 * factorial(1)   step 7: RETURN 2 * 1 = 2
// step 5: CALL factorial(1) = 1 * factorial(0)   step 6: RETURN 1

// Benefit of recursion:
// Useful when number of steps are unknown
// Divide the work into smaller chunks

// const recursiveFactorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial(n - 1);
// };

// const factorialTernaryOperator = (n) => n === 0 ? 1 : n * factorialTernaryOperator(n - 1);
