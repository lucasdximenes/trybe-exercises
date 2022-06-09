# JavaScript ES6 - let, const, arrow functions and template literals

---

## Exercises - Part 1

### [Exercise 1](./exercise_1/)

> Copy the code below:

<details>
<summary>Code JS</summary>

```
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);
```

</details>

1. 🚀 Change the variables to respect the scope in which they were declared.

   - Modify the structure of the function so that it is an `arrow function`;

   - Modify the variables to respect the scope where they are declared;

   - Modify the concatenations to `template literals`.

---

### [Exercise 2](./exercise_2/)

> Copy the code below:

<details>
<summary>Code JS</summary>

```
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // será necessário alterar essa linha 😉
```

</details>

- Create a function that makes the `oddsAndEvens` array in ascending order;

- Use `console.log` and `template literals` to return the sentence: `'The numbers 2,3,4,7,10,13 are in ascending order!'`.

  - Use `template literals` so that the call `console.log(<your code>oddsAndEvens<your code>);` returns the sentence "The numbers 2,3,4,7,10,13 are in ascending order !".

- Bonus (optional): try doing the same exercise using the `array.sort()` method. Spoiler: It is possible to perform a function that sorts any array of numbers.

---

## Exercises - Part II

### [Exercise 1](./exercise_3/)

1. Create a function that takes a number and returns its factorial.

   - In mathematics, the factorial of a positive integer N, represented by N!, is the product of all its predecessors up to the number one. `Example: 4! = 4 * 3 * 2 * 1 = 24.`

   - Bonus (optional): try doing the same exercise recursively. Spoiler: It is possible to resolve with one line using ternary operator.

---

### [Exercise 2](./exercise_4/)

1. Create a function that takes a phrase and returns the longest word.

   - Example: ` longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'`

---

### [Exercise 3](./exercise_5/)

1. 🚀 Create a page with a click counter.

   > Your page must contain:

   - A button to which an event listener will be associated;

   - A clickCount variable in the JavaScript file that accumulates the number of clicks on the button;

   - A field in the HTML that updates the number of clicks on the button as the clickCount variable is updated.

---

### [Exercise 4](./exercise_6/)

1. 🚀 Create two JavaScript functions with the following specifications:

- Function 1: Write a function that replaces the letter 'x' in a sentence.

  - The function must receive a name per parameter;

  - Declare within the function a variable with the name phrase, of type const and with the value equal to 'Tryber x here!';

  - The function should return a new sentence where the x of the sentence 'Tryber x here!' be replaced by the name passed by parameter.

> Example:

```
- Parameter: 'Bebeto'
- Return: 'Tryber Bebeto aqui!'
```

- Function 2: Write a function that will receive the return of Function 1 by parameter and will return a new string.

  - The function must receive the return of Function 1 by parameter;

  - Declare within the function a variable with the name skills, of type const;

    - The skills variable should be an array containing three strings with technologies you've already learned.

  - Concatenate the value returned from Function 1, the phrase 'My top three skills are:' and the value of the skills variable.

> Return example:

```
Tryber Bebeto aqui!

Minhas três principais habilidades são:

- JavaScript

- HTML

- CSS
```
