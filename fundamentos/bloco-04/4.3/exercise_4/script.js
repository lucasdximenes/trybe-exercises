let higherNumber = 50;
let lowerNumber = 0;
let largestPrime = 0;

for (let i = lowerNumber; i <= higherNumber; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    if (i > 1 && flag == 0) {
        largestPrime = i;
    }
}

console.log(largestPrime);
