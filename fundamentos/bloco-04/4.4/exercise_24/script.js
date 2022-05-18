function longestString(arr) {
    let lgth = 0;
    let longest;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > lgth) {
            lgth = arr[i].length;
            longest = arr[i];
        }
    }

    return longest;
}

let testArr = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"];
console.log(longestString(testArr));
