/* eslint-disable complexity */
// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let firstPosition = arr[0];
  let lastPosition = arr[arr.length - 1];
  return `${lastPosition}, ${firstPosition}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoint = 3 * wins;
  let tiePoint = 1 * ties;
  let team = winPoint + tiePoint;
  return team;
}

// Desafio 6
function greatestNum(arr) {
  // find greatest number
  let greatest = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (greatest < arr[i]) {
      greatest = arr[i];
    }
  }
  return greatest;
}

function highestCount(arr) {
  // seu código aqui

  // find frequency
  let greatest = greatestNum(arr);
  let count = 0;
  for (let i = 0; i < arr.length; i += 1) if (arr[i] === greatest) count += 1;
  return count;
}

// Desafio 7
function catAndMouse(m, c1, c2) {
  // seu código aqui
  let cat1Distance = Math.abs(c1 - m);
  let cat2Distance = Math.abs(c2 - m);

  if (cat1Distance > cat2Distance) {
    return "cat2";
  }
  if (cat1Distance < cat2Distance) {
    return "cat1";
  }
  if (cat1Distance === cat2Distance) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8

function checkFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) return "fizzBuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return "bug!";
}

function fizzBuzz(arr) {
  // seu código aqui
  let fizzBuzzBug = [];
  for (let i = 0; i < arr.length; i += 1) {
    let num = arr[i];
    fizzBuzzBug.push(checkFizzBuzz(num));
  }
  return fizzBuzzBug;
}

// Desafio 9
function encode(str) {
  // seu código aqui
  return str
    .replace(/a/g, "1")
    .replace(/e/g, "2")
    .replace(/i/g, "3")
    .replace(/o/g, "4")
    .replace(/u/g, "5");
}
function decode(str) {
  // seu código aqui
  return str
    .replace(/1/g, "a")
    .replace(/2/g, "e")
    .replace(/3/g, "i")
    .replace(/4/g, "o")
    .replace(/5/g, "u");
}

// Desafio 10
function techList(arr, str) {
  // seu código aqui
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
