# JavaScript ES6 - Higher Order Functions - forEach, find, some, every, sort

## Agora a prática

> Estes exercícios praticam os conceitos de Higher Order Functions associados a outros já vistos, como arrow functions, template literals, objetos e temas dos fundamentos. Essa mistura de conceitos é muito importante para seu aprendizado, então use tudo o que sabe para resolver os exercícios!
> Utilize seguinte código como template para realizar os exercícios:

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

### [Exercício 1](./exercise_1/script.js)

1. Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

   - Dica: use a função find.

---

### [Exercício 2](./exercise_2/script.js)

2. Retorne o nome do livro de menor nome.

   - Dica: use a função forEach.

---

### [Exercício 3](./exercise_3/script.js)

3. Encontre o primeiro livro cujo nome possui 26 caracteres.
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

### [Exercício 4](./exercise_4/script.js)

4. Ordene os livros por data de lançamento em ordem decrescente.
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

### [Exercício 5](./exercise_5/script.js)

5. Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

```
const expectedResult = false;

```

---

### [Exercício 6](./exercise_6/script.js)

6. Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

```
const expectedResult = true;
```

---

### [Exercício 7](./exercise_7/script.js)

7. Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

```
const expectedResult = false;
```
