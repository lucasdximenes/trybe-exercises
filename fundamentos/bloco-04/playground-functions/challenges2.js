// Desafio 11
function containsNegative(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0) {
      return true;
    }
  }
  return false;
}
function checkGreatestNumber(arr) {
  let largest = arr[0];

  for (let i = 0; i < arr.length; i += 1) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  return largest;
}
function countRepeatedNum(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (counts[arr[i]]) {
      counts[arr[i]] += 1;
    } else {
      counts[arr[i]] = 1;
    }
  }
  return counts;
}
function checkRepeatedNum(arr) {
  let counts = countRepeatedNum(arr);
  for (let prop in counts) {
    if (counts[prop] >= 3) {
      return true;
    }
  }
}
function generatePhoneNumber(arr) {
  // seu código aqui
  const error = "não é possível gerar um número de telefone com esses valores";
  if (arr.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  if (containsNegative(arr) === true) {
    return error;
  }
  if (checkGreatestNumber(arr) > 9) {
    return error;
  }
  if (checkRepeatedNum(arr) === true) {
    return error;
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(a, b, c) {
  // seu código aqui
  if (a < b + c && a > Math.abs(b - c)) {
    return true;
  }
  return false;
}

// Desafio 13
function getNumFromStr(str) {
  let regex = /\d+/g;
  // Create an array of num
  let numInString = str.match(regex);
  let stringToNum = numInString.map(Number);
  return stringToNum;
}

function hydrate(str) {
  // seu código aqui
  let arrOfNum = getNumFromStr(str);
  let result = 0;
  for (let i = 0; i < arrOfNum.length; i += 1) {
    result += arrOfNum[i];
  }
  if (result === 1) {
    return `${result} copo de água`;
  }
  return `${result} copos de água`;
}
