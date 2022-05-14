let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var smallest = numbers[0];

for (var i = 0; i < numbers.length; i++) {
    if (smallest > numbers[i]) {
        smallest = numbers[i];
    }
}
console.log(smallest);
