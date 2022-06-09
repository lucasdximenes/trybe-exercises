const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.
// iterate method -> bubble sort
// const sorted = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] < arr[j]) {
//         let n = arr[i];
//         arr[i] = arr[j];
//         arr[j] = n;
//       }
//     }
//   }
//   return arr;
// };
// console.log(`Os números ${sorted(oddsAndEvens)} se encontram ordenados de forma crescente!`)

// .sort() and compare function explanation:
// By default, the sort() function sorts values as strings.
// This works well for strings ("Apple" comes before "Banana").
// However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
// Because of this, the sort() method will produce incorrect result when sorting numbers.
// You can fix this by providing a compare function:

// The purpose of the compare function is to define an alternative sort order.
// The compare function should return a negative, zero, or positive value, depending on the arguments:
// When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// If the result is negative a is sorted before b.
// If the result is positive b is sorted before a.
// If the result is 0 no changes are done with the sort order of the two values.
// reference: https://www.w3schools.com/js/js_array_sort.asp

// const sorted = oddsAndEvens.sort((a, b) => a - b);
// console.log(`Os números ${sorted} se encontram ordenados de forma crescente!`);
