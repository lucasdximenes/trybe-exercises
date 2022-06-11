# Getting Started in Jest

---

## Practicing test implementation

> Initial setup:

     - `npm install`

> How to run all tests:

     - `npm test`

> How to run only tests from one file:

     - `npm test <file>`

> All tests are in the [tests](./tests) folder.

> All scripts are in the [src](./src) folder.

---

### [sum.test.js](./tests/sum.test.js)

1. The sum(a, b) function returns the sum of parameter a and b.

   1. Test if sum(4, 5) returns 9

   2. Test if sum(0, 0) returns 0

   3. Test if sum function throws an error when parameters are 4 and "5"(string 5)

   4. Test if the error message is "parameters must be numbers" when calling sum(4, "5")

<details>
<summary>Function Sum</summary>

```
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}
```

</details>

---

### [myRemove.test.js](./tests/myRemove.test.js)

2. The myRemove(arr, item) function takes an array arr and returns a copy of that array without the item element if it exists in the array.

   1. Check if the call myRemove([1, 2, 3, 4], 3) returns the expected array

   2. Check that calling myRemove([1, 2, 3, 4], 3) does not return array [1, 2, 3, 4]

   3. Check if the call myRemove([1, 2, 3, 4], 5) returns the expected array

<details>
<summary>Function myRemove</summary>

```
function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
```

</details>

---

### [myFizzBuzz.test.js](./tests/myFizzBuzz.test.js)

3. The myFizzBuzz(num) function takes a number num and returns "fizzbuzz" if the number is divisible by 3 and 5, returns "fizz" if it is divisible only by 3, returns "buzz" if divisible only by 5, returns the own number if not divisible by 3 or 5 and returns false if num is not a number

   1. Make a call with a number divisible by 3 and 5 and check if the return is as expected

   2. Make a call with a number divisible by 3 and check if the return is as expected

   3. Make a call with a number divisible by 5 and check if the return is as expected

   4. Make a call with a number that is not divisible by 3 or 5 and verify that the return is as expected

   5. Make a call with a parameter that is not a number and check if the return is as expected

<details>
<summary>Function myFizzBuzz</summary>

```
function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
```

</details>

---

> In the following exercises, you will work with tests for some functions you created in [Playground Functions](https://github.com/lucasdximenes/trybe-exercises/tree/main/fundamentos/bloco-04/playground-functions) from block 4.

### [encodeDecode.test.js](./tests/encodeDecode.test.js)

4. For the encode and decode functions create the following tests in Jest:

   1. Test if encode and decode are functions;

   2. For the encode function, test whether the vowels a, e, i, o, u are converted to 1, 2, 3, 4 and 5, respectively;

   3. For the decode function, test whether the numbers 1, 2, 3, 4 and 5 are converted into the vowels a, e, i, o, u, respectively;

   4. Test if the other letters/numbers are not converted for each case;

   5. Test if the string that is returned by the functions has the same number of characters as the string passed as a parameter.

---

### [techList.test.js](./tests/techList.test.js)

5. The techList function receives as parameters an array containing a list of technologies and a string with a name. For each technology in the array, the function creates, in alphabetical order, an object with the following structure:

<details>
<summary>Structure</summary>

```
{
  tech: 'nomeTecnologia',
  name: name,
}
```

</details>

> Implement the techList function from the tests below. Try refactoring the function you created for this project! It is important never to change tests or variables already written in the code.

<details>
<summary>techList test</summary>

```
const techList = require('./techList.js');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

module.exports = techList;
```

</details>

---

### [hydrate.test.js](./tests/hydrate.test.js)

6. The hydrate function takes a string in the form "drink number", and returns the suggestion of how many glasses of water you should drink to hydrate yourself. For every drink, you should have a glass of water to avoid having a hangover. Example:

<details>
<summary>Example</summary>

```
// string recebida
'1 cerveja'
// retorno da função
'1 copo de água'

// string recebida
'1 cerveja, 2 shots e 1 catuaba'
// retorno da função
'4 copos de água'

// string recebida
'2 caipirinhas'
// retorno da função
'2 copos de água'
```

</details>

> Implement the hydrate function from the tests below. Try refactoring the function you created for the Playground Function project! It is important never to change tests or variables already written in the code.

<details>
<summary>Hydrate test</summary>

```
const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
```

</details>

---

### [bonus.test.js](./tests/bonus.test.js)

> ### [bonus.js](./src/bonus.js)

1. Are you ready for a challenge?! In this exercise, you will practice test-driven development by implementing:

   - The function;

   - The tests for this function;

> Consider the data below. You must create a function that receives two parameters: the id of the employee and the information available about him (firstName, lastName, specialties). You must also create the tests for this function. Your function should then return the results of the search for the id for that employee and the information queried. If the id is not in the staff, your function should return the error "Unidentified ID". If the information to be accessed does not exist, the function should return the error "Information unavailable".

<details>
<summary>Bonus template</summary>

```
// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
};
```

</details>
