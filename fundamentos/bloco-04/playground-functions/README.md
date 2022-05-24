# Mandatory requirements

:warning: **Read all requirements carefully and strictly follow what is asked. Do not change the name of any function** :warning:

## 1 - Create a function using the && operator

<details>
  <summary>
    Implement the <code>compareTrue</code> function using only the <code>&&</code> operator
  </summary> <br />

The `compareTrue` function when receiving two boolean parameters should:

- Return `true` if both values ​​are true;
- Return `false` if one or both parameters are false.

Example:

```javascript
const giraffe = true;
const elephant = true;
const monkey = false;
```

If the function is called with the values ​​`giraffe` and `elephant` as parameters, it returns `true`, but if it is called with the parameters `monkey` and `elephant` it returns `false`.

**What will be tested:**

- Return false when the function compareTrue is called with a parameter with value false and another with value true;

- Return false when calling the compareTrue function with two parameters of false value;

- Return true when calling the compareTrue function with two parameters of true value.

</details>

## 2 - Create a function that calculates the area of ​​a triangle

<details>
  <summary>
Implement the <code>calcArea</code> function that returns the calculation of the total area of ​​a triangle

  </summary> <br />

The `calcArea` function takes the value of the base (`base`) and another of the height (`height`) of a triangle and returns the calculation of its area.

- Calculate the total area of ​​the triangle using the formula `(base * height) / 2`.

**What will be tested:**

- Return the value 250 when the calcArea function is called with the base parameter set to 10 and the height parameter set to 50;

- Return the value 5 when the `calcArea` function is called with the `base` parameter set to 5 and the `height` parameter set to 2;

- Return the value 25.5 when the `calcArea` function is called with the `base` parameter set to 51 and the `height` parameter set to 1.

</details>

## 3 - Create a function that splits a sentence

<details>
  <summary>
Implement the <code>splitSentence</code> function that splits a sentence according to the number of words

  </summary> <br />
The `splitSentence` function takes a string as a parameter and must return an array with the words separated by commas.
  
  Example: if the function receives the string `'go Trybe'`, the return must be `['go', 'Trybe']`.

**What will be tested:**

- Return the value `['go', 'Trybe']` if the function receives the string `'go Trybe'`;

- Return the value `['vamo', 'que', 'vamo']` if the function receives the string `'vamo que vamo'`;

- Return the value `['rocket']` if the function receives the string `'rocket'`.

</details>

## 4 - Create a function that uses string concatenation

<details>
  <summary>
Implement the <code>concatName</code> function which takes an array of strings and returns the last item in the first position

  </summary> <br />
The `concatName` function takes an array of strings and must return a string of the form `'LAST ITEM, FIRST ITEM`, regardless of the size of the array.
  
  Example:

- If the parameter passed to the `concatName` function is the array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, the function should return `Paolillo, Lucas`.

**What will be tested:**

- Return `'Paolillo, Lucas'` when the parameter passed in the concatName function is `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;

- Return `'re, rocket'` when the parameter passed in the concatName function is `['rocket', 'not', 'has', 'reverse']`;

- Return `'captain, captain'` when the parameter passed in the concatName function is `['captain', 'my', 'captain']`.

</details>

## 5 - Create a function that calculates the amount of points in a soccer championship

<details>
  <summary>
Implement the <code>footballPoints</code> function that calculates the score of a football team in a championship from the number of wins and ties

  </summary> <br />

The `footballPoints` function receives the number of victories (`wins`) and the number of ties (`ties`) and returns the amount of points that the team scored in a championship. For this, consider that:

- `wins`: is the number of wins and is worth 3 points;
- `ties`: is the number of ties and is worth 1 point.

**What will be tested:**

- Return `50` points when the team has 14 wins and 8 draws;

- Return `5` points when the team has 1 win and 2 draws;

- Return `0` points when the team has 0 wins and 0 draws.

</details>

## 6 - Create a function that calculates the number of repetitions of the largest number

<details>
  <summary>
Implement the <code>highestCount</code> function which should return the number of times the highest number is repeated when receiving an array of numbers.

  </summary> <br />

The function must return the number of times the **largest** number is repeated within the array.

For example:

- If the parameter is an array with values ​​`[9, 1, 2, 3, 9, 5, 7]`, the function must return `2`, which is the number of times the number `9` (largest number of the array) is repeated.

**WHAand will be tested:**

- Return `2` when the parameter passed in the highestCount function is `[9, 1, 2, 3, 9, 5, 7]`;

- Return `1` when the parameter passed in the highestCount function is `[0, 4, 4, 4, 9, 2, 1]`;

- Return `3` when the parameter passed in the highestCount function is `[0, 0, 0]`.

</details>

## 7 - Create a Mouse Hunt function

<details>
  <summary>
Implement the <code>catAndMouse</code> function that checks which cat is closest to the mouse

  </summary> <br />
Imagine that two cats are chasing the same mouse. You need to check which cat is closest to its prey. To do so, implement the `catAndMouse` function that takes 3 parameters of type `number` in the following order:

    - `mouse`: represents the mouse position.

    - `cat1`: represents the position of one of the cats;

    - `cat2`: represents the position of the other cat ;

- Calculate the distances between the mouse and each of the cats and return which of the felines is closest to the mouse:

  - Return the string `'cat2'` if the cat `cat2` is closer to the mouse;
  - Return the string `'cat1'` if the cat `cat1` is closer to the mouse;
  - Return the string `'the cats bump and the mouse runs'` if the cats are the same distance from the mouse.

Example:

- If the cat `cat2` is 2 units away from the mouse and `cat1` is 3 units away, your function should return `'cat2'`;

- If the cats are at the same distance from the mouse, the function should return the string `'the cats bump and the mouse runs'`.

**What will be tested:**

- Return the string `'cat2'` if the `catAndMouse` function receives the parameters where cat `cat2` is 2 units away from the mouse and `cat1` is 3 units away from the mouse;

- Return the string `'cat1'` if the catAndMouse function receives the parameters where cat `cat1` is 6 units away from the mouse and `cat2` is 12 units away from the mouse ;

- Return the string `'the cats bump and the mouse runs'` if the `catAndMouse` function receives the parameters where the cats are at the same distance from the mouse.

</details>

## 8 - Create a FizzBuzz function

<details>
  <summary>
Implement the <code>fizzBuzz</code> function which takes an array of numbers and returns a string array according to the result

  </summary> <br />

The `fizzBuzz` function receives an array of numbers and for each number in the array it is divided by 3 and 5 and according to the result, the function should return a string:

- Return the string `'fizz` for each number in the array that is divisible only by 3;
- Return the string `'buzz'` for each number in the array that is divisible only by 5;
- Return the string `'fizzBuzz'` for each number in the array that is divisible by 3 **and** 5;
- Return the string `'bug!'` for each number in the array that is not divided by 3 or 5.

Example: if the parameter is [2, 15, 7, 9, 45], your function should return `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

**What will be tested:**

- Return the strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` when passing parameters [2, 15, 7, 9, 45] to the `fizzBuzz function `;

- Return the strings `['bug!', 'fizz']` when passing parameters [7, 9] to the `fizzBuzz` function;

- Return the strings `['fizz', 'buzz']` when passing parameters [9, 25] to the `fizzBuzz` function.

</details>

## 9 - Create a function that Encode and Decode

<details>
  <summary>
Implement a function that encodes and decodes a sentence, exchanging vowels for numbers or numbers for vowels.

  </summary> <br />

To encode the sentence, use the `encode` function that takes a string as a parameter and must change all **lowercase vowels by numbers**, according to the format:

a -> 1 \
and -> 2 \
i -> 3 \
the -> 4 \
u -> 5

That is, if the `encode` parameter is `'hi there!'`, the return should be `'h3 th2r2!'`.

To decode the sentence, use the `decode` function that takes a string containing letters and numbers as a parameter and must change all **numbers to lowercase vowels**, according to the format:

1 -> to \
2 -> and \
3 -> i \
4 -> the \
5 -> u

For example, if the `decode` parameter is `'h3 th2r2!'`, the return should be `'hi there!'`.

**What will be tested:**

- When using the `hello` parameter, you should return `h2ll4`;
- When using the `How are you today?` parameter, it should return `H4w 1r2 y45 t4d1y?`;
- When using the `This is an encoding test.` parameter, it should return `Th3s 3s 1n 2nc4d3ng t2st.`;
- When using the `go Trybe! ` should return `g4 Tryb2!` .

</details>

## 10 - Create a Technology List function

<details>
  <summary>
Implement the <code>techList</code> function which takes an array and a string and returns an array of objects.

  </summary> <br />

The `techList` function takes two parameters:

- An array with technology names;
- A name referring to a person's name.

The function should return:

- 'Empty!' if it does not receive any parameter ;
- One object for each technologyia of the array, with the following structure:

```javascript
{
  tech: 'NameTech',
  name: 'person's name'
}
```

For example, if the function receives the parameters `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` and `'Lucas'`, the return should be:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas",
  },
  {
    tech: "HTML",
    name: "Lucas",
  },
  {
    tech: "JavaScript",
    name: "Lucas",
  },
  {
    tech: "Jest",
    name: "Lucas",
  },
  {
    tech: "React",
    name: "Lucas",
  },
];
```

**What will be tested:**

- Return a list of ordered objects when a list with 5 technologies is passed;

- Return the `'Empty!'` error message when the list has no technologies.

</details>

---

# Bonus requirements

## 11 - Create a phone number function

<details>
  <summary>
Implement the <code>generatePhoneNumber</code> function that takes an array with 11 numbers and returns a phone number, respecting parentheses, dashes and spaces.

  </summary> <br />

Example: if the function parameter is `[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]`, the `generatePhoneNumber` function should return `(12) 34567-8901`.

- Return the sentence `'Array with incorrect size.'` if the function receives an array with a size other than 11;

- Return the string `'cannot generate a phone number with these values'` if any of the numbers in the array is **less** than 0, **greater** than 9 or is repeated 3 times or more.

**What will be tested:**

- Return the string 'Array incorrectly sized.' if the array has a size other than 11;

- Return the string "cannot generate a phone number with these values" if any of the numbers in the array is less than 0;

- Return the string "cannot generate a phone number with these values" if any number in the array is greater than 9;

- Return the string "cannot generate a phone number with these values" if any number in the array is repeated 3 times or more;

- Return a phone number, respecting parentheses, dashes and spaces if the numbers in the array meet the specifications.

</details>

## 12 - Create a function that tests the existence condition of a triangle

<details>
  <summary>
Implement the <code>triangleCheck</code> function that checks if it is possible to form a triangle by analyzing the length of three lines

  </summary> <br />

The `triangleCheck` function should receive the parameters `lineA`, `lineB` and `lineC` with the value of the length of three different lines.

- In order to form a triangle, it is necessary that **the measure of _any_ of the sides** meets the following conditions:

1. be **less** than the sum of the measures of the other two sides;

**_AND_**

2. be **greater** than the absolute value (modulus) of the difference between the other two sides.

**Looking for the :eyes:** hint To get the absolute value of a number in JavaScript, search for the `Math.abs` function.

- The return of your function must be a boolean.

Example: the return of `triangleCheck(10, 14, 8)` should be `true`.

**What will be tested:**

- Return `false` when the measure of any of the sides is greater than the sum of the measures of the other two sides;

- Return `false` when the measure of any of the sides is less than the absolute value of the difference of the measures of the other two sides;

- Return `true` when the measure of any one side is less than the sum of the measures of the other two sides and greater than the absolute value of the difference between the other two sides.

</details>

## 13 - Create a welcome function to the Trybe Bar!

<details>
  <summary>
Implement the `hydrate` function which takes a string and returns the suggestion of how many glasses of water you should drink.

  </summary> <br />

```javascript
// String received:
"1 beer";

// String returned:
"1 glass of water";
```

```
// String received:
  '1 cachaça, 5 beers and 1 glass of wine'

// String returned:
  '7 glasses of water'
```

```
// String received:
  '1 cachaça, 5 beers and 1 glass of wine'

// String returned:
  '7 glasses of water'
```

- For simplicity, consider that the string **always** will have the format _quantity (in number) + type of drink_;

- The number on the front of each drink must be between 1 and 9.

**Looking for tip 👀:** search for something similar to `get all integers inside a string js`.

**What will be tested:**

- Return the suggestion of how many glasses of water to drink when receiving a string.

</details>

</details>
