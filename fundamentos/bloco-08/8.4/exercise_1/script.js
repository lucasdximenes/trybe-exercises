const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// function flatten(arr) {
//   // escreva seu código aqui
//   return arr.reduce((acc, curr) => acc.concat(curr), []);
// }
// console.log(flatten(arrays));
function flatten() {
  return arrays.reduce((acumulador, item) => `${acumulador} ${item}`, []);
}
console.log(flatten());
