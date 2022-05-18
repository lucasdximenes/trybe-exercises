function lowestNumIndex(arr) {
    let max = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < max) {
            maxIndex = i;
            max = arr[i];
        }
    }
    return maxIndex;
}

let arr = [2, 4, 6, 7, 10, 0, -3];
console.log(lowestNumIndex(arr));
