# Introdução ao MongoDB

---

## Exercícios:

> Utilizando a coleção [bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/), faça os seguintes exercícios:

### 1. Retorne o documento com \_id igual a 8.

<details>

<summary>Mostrar resposta</summary>

  <p>

```js
db.bios.find({ _id: 8 });
```

  </p>

</details>

---

### 2. Retorne o documento com \_id igual a 8, mas só exiba os atributos: \_id e name .

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.bios.find({ _id: 8 }, { _id: 1, name: 1 });
```

  </p>

</details>

---

### 3. Retorne apenas os atributos name e birth do documento com \_id igual a 8.

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });
```

  </p>

</details>

---

### 4. Retorne todos os documentos em que o atributo name.first seja igual a **John**, utilizando o método pretty() .

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.bios.find({ "name.first": "John" }).pretty();
```

  </p>

</details>

---

### 5. Retorne os 3 primeiros documentos da coleção bios utilizando o método pretty() .

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.bios.find().limit(3).pretty();
```

  </p>

</details>

---

### 6. Retorne 2 documentos da coleção bios pulando os 5 primeiros documentos.

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.bios.find().skip(5).limit(2);
```

  </p>

</details>

---

> Utilizando o arquivo [books.json](./books.json), importe-o utilizando o `mongoimport` e utilize a coleção `books` para realizar os exercícios abaixo:

### 7. Retorne a quantidade de documentos da coleção books.

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.books.countDocuments();
```

  </p>

</details>

---

### 8. Conte quantos livros existem com o status "PUBLISH" .

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.books.countDocuments({ status: "PUBLISH" });
```

  </p>

</details>

---

### 9. Exiba os atributos title , isbn e pageCount dos 3 primeiros livros. NÃO retorne o atributo \_id .

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);
```

  </p>

</details>

---

### 10. Pule 5 documentos e exiba os atributos \_id , title , authors e status dos livros com o status "MEAP" , limitando-se a 10 documentos.

<details>
  <summary>Mostrar resposta</summary>
  <p>

```js
db.books
  .find({ status: "MEAP" }, { _id: 1, title: 1, authors: 1, status: 1 })
  .skip(5)
  .limit(10);
```

  </p>

</details>

---
