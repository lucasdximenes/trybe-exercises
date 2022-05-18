function checkEnding(stringWord, stringEnding) {
    let wordIndexDifference = stringWord.length - stringEnding.length;
    // stringWord.indexOf('be', 3) = true
    let indexOfStringWord = stringWord.indexOf(
        stringEnding,
        wordIndexDifference
    );

    // The indexOf() method returns -1 if it is not present.
    if (indexOfStringWord !== -1) {
        return true;
    } else {
        return false;
    }
}

let stringWord = "trybe";
let stringEnding = "be";
console.log(checkEnding(stringWord, stringEnding));
