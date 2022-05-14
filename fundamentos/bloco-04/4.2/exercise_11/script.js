let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let oddCounter = 0;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        oddCounter += 1;
    }
}

if (oddCounter > 0) {
    console.log(oddCounter);
} else {
    console.log("nenhum valor ímpar encontrado");
}
