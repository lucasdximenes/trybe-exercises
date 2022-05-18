function mostFrequent(arr) {
    arr.sort();

    let max_count = 1;
    let res = arr[0];
    let curr_count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == arr[i - 1]) {
            curr_count += 1;
        } else {
            curr_count = 1;
        }

        if (curr_count > max_count) {
            max_count = curr_count;
            res = arr[i - 1];
        }
    }

    return res;
}

let test = [2, 3, 2, 5, 8, 2, 3];
console.log(mostFrequent(test));
