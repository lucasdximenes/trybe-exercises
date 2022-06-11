function encode(str) {
  return str
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
}
function decode(str) {
  return str
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}

function techList(arr, str) {
  if (arr.length === 0) {
    return "Vazio!";
  }
  let techListArr = [];
  arr.sort();
  for (let i = 0; i < arr.length; i += 1) {
    techListArr.push({ tech: arr[i], name: str });
  }

  return techListArr;
}

function getNumFromStr(str) {
  let number = 0;
  let regex = /\d+/g;
  let numInString = str.match(regex);
  numInString.forEach((element) => {
    number += Number(element);
  });
  return number;
}

function hydrate(str) {
  let result = getNumFromStr(str);
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}

module.exports = {
  decode,
  encode,
  hydrate,
  techList,
};
