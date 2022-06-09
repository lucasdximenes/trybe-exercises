// Return biggest word of a phrase
const longestWord = (phrase) => {
  const words = phrase.split(" ").sort((a, b) => b.length - a.length);
  return words[0];
};

console.log(longestWord("Antônio foi no banheiro e não sabemos o que aconteceu"));
// return 'aconteceu'
