# JavaScript ES6 - Higher Order Functions - reduce

## Now the practice

> All exercises must be performed using `reduce`, and if necessary another HOF, the information will be quoted in the statement.

---

### [Exercise 1](./exercise_1/script.js)

1. Given an array, turn it into an array.

```
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // write your code here
}
```

---

> For exercises 2, 3 and 4 consider the following array:

<details>
<summary>Array</summary>

```
const books = [
  {
    id: 1,
    name: 'A Song of Ice and Fire',
    genre: 'Fantasy',
    author: {
      name: 'George R.R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasy',
    author: {
      name: 'J. R.R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Dune',
    genre: 'Science Fiction',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'The Thing',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Add the exercise code here:
```

</details>

---

### [Exercise 2](./exercise_2/script.js)

2. Create a string with the names of all the authors.

```
const expectedResult = "George R.R. Martin, J.R.R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H.P. Lovecraft.";

function reduceNames() {
  // write your code here
}
```

---

### [Exercise 3](./exercise_3/script.js)

3. Calculate the average age of the authors when their respective books were released.

```
const expectedResult = 43;

function averageAge() {
  // write your code here
}
```

---

### [Exercise 4](./exercise_4/script.js)

4. Find the book with the longest name.

```

const expectedResult = {
  id: 1,
  name: 'A Song of Ice and Fire',
  genre: 'Fantasy',
  author: {
    name: 'George R.R. Martin',
    birthYear: 1948,
  },
  releaseYear: 1991,
};

function longestNamedBook() {
  // write your code here
}
```

---

### [Exercise 5](./exercise_5/script.js)

5. Given the array of names, return the number of times the letter `a` appears in upper or lower case.

```
const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // write your code here
}
```

---

### [Exercise 6](./exercise_6/script.js)

6. Now let's create a new array of objects from the information below, where each object will have the format `{ name: student's name, average: grade average }`. For that, let's assume that position 0 of `grades` refers to the student in position 0 of `students`, here in addition to `reduce` it will also be necessary to use the `map` function.
   > Tip: You can access the array index inside `map`, and you can see the expected object in the `expected` constant.

```
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // write your code here
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Michael', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];
```
