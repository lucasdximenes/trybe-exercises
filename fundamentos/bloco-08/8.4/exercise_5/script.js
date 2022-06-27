const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(arr) {
  // escreva seu código aqui
  const lowercaseA = arr
    .map((nam) => nam.split("").filter((char) => char === "a").length)
    .reduce((acc, curr) => acc + curr);
  const upperCaseA = arr
    .map((nam) => nam.split("").filter((char) => char === "A").length)
    .reduce((acc, curr) => acc + curr);
  return `'a' aparece ${lowercaseA} vezes e 'A' aparece ${upperCaseA} vezes`;
}
console.log(containsA(names));
