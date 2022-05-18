function arrayOfNumbers(vector) {
    let result = [];
    for (let i = 0; i < vector.length; i++) {
        let numbers = vector[i];
        for (let j = 0; j < numbers.length; j++) {
            let current = numbers[j];
            if (current % 2 === 0) {
                result.push(current);
            }
        }
    }
    return result;
}

let vector = [
    [1, 2],
    [3, 4, 5, 6],
    [7, 8, 9, 10],
];

console.log(arrayOfNumbers(vector));
