# JavaScript ES6 - Higher Order Functions - map and filter

## Now the practice

> For the proposed exercises use the following template:

<details>
<summary>Code Template</summary>

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

### [Exercise 1](./exercise_1/script.js)

1. Create an array with strings in the format `BOOK_NAME - BOOK_GENRE - AUTHOR_PERSON_NAME`

   - Tip: Use the `map` function

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  'A Song of Ice and Fire - Fantasy - George R. R. Martin',
  'The Lord of the Rings - Fantasy - J. R. R. Tolkien',
  'Foundation - Science Fiction - Isaac Asimov',
  'Dune - Science Fiction - Frank Herbert',
  'The Thing - Horror - Stephen King',
  'The Call of Cthulhu - Terror - H. P. Lovecraft',
];
```

</details>

---

### [Exercise 2](./exercise_2/script.js)

2. Build an array of objects from the array of books. Each object must contain an `author` property, with the name of the person who authored the book, and an `age` property with the age of that person when the book was released. The array must be sorted by age, that is, from the youngest to the oldest person considering their ages when the book was released.

   - Tip: use the `map`, `sort` functions

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R.R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R.R. Tolkien',
  },
];
```

</details>

---

### [Exercise 3](./exercise_3/script.js)

3. Create an array with all objects that have science fiction or fantasy genre.

   - Tip: use the `filter` function;

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  {
    id: 1,
    name: 'A Song of Ice and Fire',
    genre: 'Fantasy',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasy',
    author: { name: 'J. R.R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Dune',
    genre: 'Science Fiction',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];
```

</details>

---

### [Exercise 4](./exercise_4/script.js)

4. Create an array sorted by books that are more than 60 years old and sort it by the oldest book.

   - Tip: use `filter` and `sort` functions

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  {
    id: 6,
    name: 'The Call of Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Foundation',
    genre: 'Science Fiction',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'The Lord of the Rings',
    genre: 'Fantasy',
    author: { name: 'J. R.R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];
```

</details>

---

### [Exercise 5](./exercise_5/script.js)

5. Create an alphabetical array of just the names of all science fiction or fantasy authors.

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  'Frank Herbert',
  'George R.R. Martin',
  'Isaac Asimov',
  'J. R.R. Tolkien',
];
```

</details>

---

### [Exercise 6](./exercise_6/script.js)

6. Create an array with the names of all books that are more than 60 years old.

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  'Lord of the Rings',
  'Foundation',
  'The Call of Cthulhu',
];
```

</details>

---

### [Exercise 7](./exercise_7/script.js)

7. Find the name of the book written by the person whose registered name begins with three initials.

   - Tip: each initial ends with a dot.

<details>
<summary>Expected Result</summary>

```
const expectedResult = 'The Lord of the Rings';
```

</details>
