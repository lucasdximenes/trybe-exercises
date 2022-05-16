let factorialNum = 10;

if (factorialNum === 0 || factorialNum === 1) {
    console.log(1);
} else {
    for (let index = factorialNum - 1; index >= 1; index -= 1) {
        factorialNum *= index;
    }
    console.log(factorialNum);
}
