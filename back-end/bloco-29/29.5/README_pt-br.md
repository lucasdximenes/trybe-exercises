# MongoDB - Complex Update

---

## Exercícios

> Para realizar os exerciocios a seguir, copie e cole o código abaixo no mongo shell.

```js
use cinema;
db.movies.drop();
db.movies.insertMany([
  {
    title: "Batman",
    category: [
      "action",
      "adventure",
    ],
    imdbRating: 7.7,
    budget: 35,
  },
  {
    title: "Godzilla",
    category: [
      "action",
      "adventure",
      "sci-fi",
    ],
    imdbRating: 6.6,
    budget: 1,
  },
  {
    title: "Home Alone",
    category: [
      "family",
      "comedy",
    ],
    imdbRating: 7.4,
  },
]);
```

---

> Para cada execução, utilize o método `find()` para conferir as alterações nos documentos.

---

🚀 **Exercício 1:** Adicione a categoria `"superhero"` ao filme `Batman`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $push: { category: "superhero" } });
```

</details>

---

**Exercício 2:** Utilizando o modificador `$each`, adicione as categorias `"villain"` e `"comic-based"` ao filme `Batman`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  { title: "Batman" },
  { $push: { category: { $each: ["villain", "comic-based"] } } }
);
```

</details>

---

🚀 **Exercício 3:** Remova a categoria `"action"` do filme `Batman`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $pull: { category: "action" } });
```

</details>

---

🚀 **Exercício 4:** Remova o primeiro elemento do _array_ `category` do filme `Batman`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $pop: { category: -1 } });
```

</details>

---

🚀 **Exercício 5:** Remova o último elemento do _array_ `category` do filme `Batman`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $pop: { category: 1 } });
```

</details>

---

🚀 **Exercício 6:** Adicione o elemento `"action"` ao _array_ `category` do filme `Batman`, garantindo que esse valor não se duplique.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $addToSet: { category: "action" } });
```

</details>

---

**Exercício 7:** Adicione a categoria `"90's"` aos filmes `Batman` e `Home Alone`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $push: { category: "90's" } }
);
```

</details>

---

**Exercício 8:** Crie um _array_ de documentos chamado `cast` para o filme `Home Alone` com os seguintes dados:

```js
{
  "actor": "Macaulay Culkin",
  "character": "Kevin"
},
{
  "actor": "Joe Pesci",
  "character": "Harry"
},
{
  "actor": "Daniel Stern"
}
```

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  { title: "Home Alone" },
  {
    $push: {
      cast: {
        $each: [
          {
            actor: "Macaulay Culkin",
            character: "Kevin",
          },
          {
            actor: "Joe Pesci",
            character: "Harry",
          },
          {
            actor: "Daniel Stern",
          },
        ],
      },
    },
  }
);
```

</details>

---

🚀 **Exercício 9:** Adicione o campo `character` com o valor `Marv` ao _array_ de `cast` em que o campo `actor` seja igual a `Daniel Stern` no filme `Home Alone`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  { title: "Home Alone", "cast.actor": "Daniel Stern" },
  { $set: { "cast.$.character": "Marv" } } // the `$` is used to refer to the first element that matches the query
);
```

</details>

---

🚀 **Exercício 10:** Crie um _array_ de documentos chamado `cast` para o filme `Batman` com os seguintes dados:

```js
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
```

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  { title: "Batman" },
  {
    $push: {
      cast: {
        $each: [
          { character: "Batman" },
          { character: "Alfred" },
          { character: "Coringa" },
        ],
      },
    },
  }
);
```

</details>

---

**Exercício 11:** Produza três _querys_ para o filme `Batman`:

- Adicione o campo `actor`, que deve ser um _array_ com o valor `Christian Bale`, ao _array_ de `cast` em que o campo `character` seja igual a `Batman`;
- Adicione o campo `actor`, que deve ser um _array_ com o valor `Michael Caine`, ao _array_ de `cast` em que o campo `character` seja igual a `Alfred`;
- Adicione o campo `actor`, que deve ser um _array_ com o valor `Heath Ledger`, ao _array_ de `cast` em que o campo `character` seja igual a `Coringa`.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  { title: "Batman", "cast.character": "Batman" },
  { $push: { "cast.$.actor": "Christian Bale" } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Alfred" },
  { $push: { "cast.$.actor": "Michael Caine" } }
);

db.movies.updateOne(
  { title: "Batman", "cast.character": "Coringa" },
  { $push: { "cast.$.actor": "Heath Ledger" } }
);
```

</details>

---

🚀 **Exercício 12:** Adicione aos atores de `cast` do `character` `Batman` do filme `Batman` os valores `"Michael Keaton"`, `"Val Kilmer"` e `"George Clooney"`, e deixe o _array_ em ordem alfabética.

<details>

<summary>Resposta</summary>

```js
db.movies.updateOne(
  {
    title: "Batman",
    "cast.character": "Batman",
  },
  {
    $push: {
      "cast.$.actor": {
        $each: ["Michael Keaton", "Val Kilmer", "George Clooney"],
        $sort: 1,
      },
    },
  }
);
```

</details>

---
