# JavaScript - Objects and Functions

---

## Objects:

### [Exercise 1](./exercise_1/script.js)

1. Create a `player` object containing the variables listed below.

```
let name = 'Martha';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

### [Exercise 2](./exercise_2/script.js)

2. Access the keys `name`, `lastName` and `age` and concatenate their information to print a message in the console in the following format: "The player Marta Silva is 34 years old".

### [Exercise 3](./exercise_3/script.js)

3. Add to the object the key `bestInTheWorld` and assign to this key an `array` containing the dates in which the player Marta was considered the best in the world.

```
[2006, 2007, 2008, 2009, 2010, 2018]
```

### [Exercise 4](./exercise_4/script.js)

4. Access the `bestInTheWorld` key and create a `console.log` in the following format: "The player Marta Silva was elected the best in the world 6 times".

### [Exercise 5](./exercise_5/script.js)

5. Access the `medals` key and create a `console.log` in the following format: "The player has 2 gold medals and 3 silver medals".

---

## for/in and for/off

### [Exercise 1](./exercise_6/script.js)

1. Using the object below, use `for/in` and print the message `'Hello xxxxx'` to the console for each name, replacing `xxxxx` with the name in question.

```
let names = {
  person1: 'John',
  person2: 'Mary',
  person3: 'Jorge',
};
```

### [Exercise 2](./exercise_7/script.js)

2. Using the object below, use `for/in` and print a `console.log` with the keys and values ​​of that object.

```
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};
```

---

## Functions

-   Take each of the exercises 1 to 5 from day 4.1 and make them all functions of the same file. The variables you define at the beginning of each file must be removed and turned into function parameters.
    > After refactoring your code, verify that it is still working as specified. Test each function with a few different inputs.

1. [Exercise 1](./exercise_8/script.js)
2. [Exercise 2](./exercise_9/script.js)
3. [Exercise 3](./exercise_10/script.js)
4. [Exercise 4](./exercise_11/script.js)
5. [Exercise 5](./exercise_12/script.js)

---

## Part I - Objects and For/In

-   Using the object below, do the following exercises:

```
let info = {
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Main character's girlfriend in Donald Duck comics',
};
```

### [Exercise 1](./exercise_13/script.js)

1. Print a welcome message from the console for the above character, including their name. Expected value in the console:
    > `Welcome, Daisy`

### [Exercise 2](./exercise_14/script.js)

2. Insert a new property into the object with the key name 'recurring' and the value 'Yes', then print the object to the console. Expected value in the console:

```
{
  character: 'Daisy',
  origin: 'Donald Duck',
  note: 'Main character's girlfriend in Donald Duck comics',
  applicant: 'Yes'
}
```

### [Exercise 3](./exercise_15/script.js)

3. Make a `for/in` that shows all the keys of the object. Expected value in the console:

```
character
source
note
recurrent
```

### [Exercise 4](./exercise_16/script.js)

4. Do a new for/in, but now show all the values ​​of the object's keys. Expected value in the console:

```
Daisy
Donald Duck
Main character's girlfriend in Donald Duck comics
Yes
```

### [Exercise 5](./exercise_17/script.js)

5. Now, define a second object with the same structure (same keys) as the first and the following values: 'Scrooge's Uncle', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'The Last Scrooge Mac', ' Yes'. Then print the values ​​of each object together according to each of the keys. Expected value in the console:

```
Daisy and Uncle Scrooge
Donald Duck and Christmas on Bear Mountain, Dell's Four Color Comics #178
Main character's girlfriend in Donald Duck and The Last MacScrooge comics
Both recurring // Attention to that last line!
```

---

-   Using the object below, do the following exercises:

```
let reader = {
  name: 'Julia',
  last name: 'Person',
  age: 21,
  Favorite books: [
    {
      title: 'The Worst Day Ever',
      author: 'Daniela Kopsch',
      publisher: 'Tordesillas',
    },
  ],
};
```

### [Exercise 6](./exercise_18/script.js)

6. Access the keys `firstname`, `surname` and `title`, which is inside the key `booksFavorites`, and create a `console.log` in the following format: `"Julia Pessoa's favorite book is called 'O Worst Day Ever'"`.

### [Exercise 7](./exercise_19/script.js)

7. Add a new favorite book under the `Favoritebooks` key, which is an `array`. Assign to this key an object containing the following information:

```
{
  title: 'Harry Potter and the Prisoner of Azkaban',
  author: 'JK Rowling',
  publisher: 'Rocco',
}
```

### [Exercise 8](./exercise_20/script.js)

8. Access the `name` and `Favoritebooks` keys and make a `console.log` in the following format: `"Julia has 2 favorite books"`.

---

## Part II - Functions

### [Exercise 1](./exercise_21/script.js)

1. Create a function that takes a `string` and returns `true` if it is a palindrome, or false if it is not.

### [Exercise 2](./exercise_22/script.js)

2. Create a function that takes an `array` of integers and returns the index of the largest value.

### [Exercise 3](./exercise_23/script.js)

3. Create a function that takes an `array` of integers and returns the index of the smallest value.

### [Exercise 4](./exercise_24/script.js)

4. Create a function that takes an `array` of names and returns the name with the most characters.

### [Exercise 5](./exercise_25/script.js)

5. Create a function that receives an `array` of integers and returns the integer that repeats the most.

### [Exercise 6](./exercise_26/script.js)

6. Create a function that takes a natural number (non-negative integer) N and returns the sum of all numbers from 1 to N.

### [Exercise 7](./exercise_27/script.js)

7. Create a function that takes a `string word` and another `string ending`. Check that the `string ending` is the end of the `string word`. Assume that the ending string will always be shorter than the word string.

---

## bonus

### [Exercise 1](./exercise_28/script.js)

1. Write a program that takes a string in Roman numerals and returns the number the string represents.
    - A string is an array of characters, so each element of the array is a letter.
    - The value of each Roman numeral is:
    ```
    | I | 1 |
    | --- | ---- |
    | IV | 4 |
    | V | 5 |
    | IX | 9 |
    | X | 10 |
    | XL | 40 |
    | L | 50 |
    | XC | 90 |
    | C | 100 |
    | CD | 400 |
    | D | 500 |
    | CM | 900 |
    | M | 1000 |
    ```
    - How about creating an object that associates each letter with a numeral for easy reference?

### [Exercise 2](./exercise_29/script.js)

2. Create a function called `arrayOfNumbers` that will take the variable `vector` as a parameter. Through a `for` loop, go through this variable, look for the even numbers and add them to a new array that should be returned at the end by the function.

```
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
```

### [Exercise 3](./exercise_30/script.js)

3. From the `basket` ​​fruit array, return an object that contains the name of the fruit as a key and the number of times it appears in the array as a value. For example, the array ['Watermelon', 'Avocado', 'Watermelon', 'Watermelon', 'Grape'], should return { Watermelon: 3, Avocado: 1, Grape: 1 } when passed as an argument to the function.
   Then print this result to the screen with a message in the following format: `Your basket has: x Watermelons, x Avocados...`

```
const basket = [
  'Watermelon', 'Avocado', 'Watermelon', 'Watermelon', 'Grape', 'Orange',
  'Jaca', 'Pear', 'Watermelon', 'Grape', 'Orange', 'Watermelon',
  'Banana', 'Grape', 'Pear', 'Avocado', 'Orange', 'Avocado',
  'Banana', 'Watermelon', 'Orange', 'Orange', 'Jaca', 'Grape',
  'Banana', 'Grape', 'Orange', 'Pear', 'Watermelon', 'Grape',
  'Jaca', 'Banana', 'Pear', 'Avocado', 'Watermelon', 'Watermelon',
  'Orange', 'Pear', 'Banana', 'Jaca', 'Orange', 'Watermelon',
  'Avocado', 'Avocado', 'Pear', 'Watermelon', 'Banana', 'Banana',
  'Avocado', 'Grape', 'Orange', 'Banana', 'Avocado', 'Grape',
  'Grape', 'Avocado', 'Avocado', 'Watermelon', 'Grape', 'Jaca',
  'Grape', 'Banana', 'Avocado', 'Banana', 'Grape', 'Banana',
  'Orange', 'Orange', 'Jaca', 'Jaca', 'Avocado', 'Jaca',
  'Orange', 'Watermelon', 'Pear', 'Jaca', 'Watermelon', 'Grape',
  'Avocado', 'Jaca', 'Jaca', 'Avocado', 'Grape', 'Orange',
  'Pear', 'Watermelon', 'Jaca', 'Pear', 'Orange', 'Jaca',
  'Pear', 'Watermelon', 'Jaca', 'Banana', 'Orange', 'Jaca',
  'Banana', 'Pera', 'Avocado', 'Grape',
];
```

---

-   Using the object below, do the following exercises:

```
let residents = {
  blockOne: [
    {
      name: 'Luiza',
      surname: 'Guimarães',
      floor: 10,
      apartment: 1005,
    },
    {
      name: 'William',
      last name: 'Albuquerque',
      floor: 5,
      apartment: 502,
    },
  ],
  blockTwo: [
    {
      name: 'Murilo',
      last name: 'Ferraz',
      floor: 8,
      apartment: 804,
    },
    {
      name: 'Zoey',
      last name: 'Brooks',
      floor: 1,
      apartment: 101,
    },
  ],
};
```

### [Exercise 4](./exercise_31/script.js)

4. Access the keys `firstname`, `lastname`, `floor` and `apartment` of the last resident of `blockTwo` and create a `console.log` in the following format: `"The resident of block 2 named Zoey Brooks lives on the 1st floor, apartment 101"`.

### [Exercise 5](./exercise_32/script.js)

5. Use `for` to print the full name of all residents of block 1, accessing their `firstname` and `surname` keys, then do the same for the residents of block 2.
