# JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

## Now the practice

> These exercises practice the concepts of Higher Order Functions associated with others already seen, such as arrow functions, template literals, objects and fundamentals themes. This mixture of concepts is very important for your learning, so use everything you know to solve the exercises!
> Use the following code as a template to perform the exercises:

<details>
<summary>Code Template</summary>

```
const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
```

</details>

---

### [Exercise 1](./exercise_1/script.js)

1. Find the name of the first person author of the book born in the year 1947.

   - Tip: use the find function.

---

### [Exercise 2](./exercise_2/script.js)

2. Return the name of the shortest-named book.

   - Tip: use the forEach function.

---

### [Exercise 3](./exercise_3/script.js)

3. Find the first book whose name is 26 characters long.

<details>
<summary>Expected Result</summary>

```
const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

```

</details>

---

### [Exercise 4](./exercise_4/script.js)

4. Sort books by release date in descending order.

<details>
<summary>Expected Result</summary>

```
const expectedResult = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: { name: 'Stephen King', birthYear: 1947 },
    releaseYear: 1986,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
];
```

</details>

---

### [Exercise 5](./exercise_5/script.js)

5. Make a function that returns true if all author people were born in the 20th century, or false otherwise.

```
const expectedResult = false;

```

---

### [Exercise 6](./exercise_6/script.js)

6. Make a function that returns true if a book was released in the 80's, and false otherwise.

```
const expectedResult = true;
```

---

### [Exercise 7](./exercise_7/script.js)

7. Make a function that returns true, if no author was born in the same year, and false, otherwise.

```
const expectedResult = false;
```
