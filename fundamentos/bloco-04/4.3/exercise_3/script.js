let array = ["java", "javascript", "python", "html", "css"];
let longestWord = array[0];
let shortnessWord = array[0];

for (let index = 0; index < array.length; index++) {
    if (array[index].length > longestWord.length) {
        longestWord = array[index];
    }
}

for (let index = 0; index < array.length; index++) {
    if (array[index].length < shortnessWord.length) {
        shortnessWord = array[index];
    }
}

console.log(longestWord);
console.log(shortnessWord);
