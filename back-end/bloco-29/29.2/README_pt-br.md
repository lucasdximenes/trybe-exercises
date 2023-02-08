# MongoDB - Filter Operators

---

## Exercícios:

> Para os exercícios a seguir utilize o arquivo [superheroes.json](./superheroes.json) e importe com o comando `mongoimport --db class --collection superheroes --file superheroes.json`.

Os documentos têm a seguinte estrutura:

```json
{
    "_id" : ObjectId("5e4ed2b2866be74b5b26ebf1"),
    "name" : "Abin Sur",
    "alignment" : "good",
    "gender" : "male",
    "race" : "Ungaran",
    "aspects" : {
        "eyeColor" : "blue",
        "hairColor" : "no hair",
        "skinColor" : "red",
        "height" : 185,
        "weight" : 40.82
    },
    "publisher" : "DC Comics"
}
```

---

### Exercício 1

Inspecione um documento para que você se familiarize com eles. Entenda os campos e os níveis existentes no documento escolhido.

<details>

<summary>Resposta</summary>

```js
db.superheroes.findOne();
```

</details>

---

### Exercício 2

Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está gravada em centímetros.

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({ "aspects.height": { $lt: 180 } });
```

</details>

---

### Exercício 3

Retorne o total de super-heróis menores que 1.80m.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });
```

</details>

---

### Exercício 4

Retorne o total de super-heróis com até 1.80m.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });
```

</details>

---

### Exercício 5:

Selecione um super-herói com 2.00m ou mais de altura.

<details>

<summary>Resposta</summary>

```js
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
```

</details>

---

### Exercício 6:

Retorne o total de super-heróis com 2.00m ou mais.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $gte: 200 } });
```

</details>

---

### Exercício 7:

Selecione todos os super-heróis que têm olhos verdes ("green").

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({ "aspects.eyeColor": "green" });
```

</details>

---

### Exercício 8:

Retorne o total de super-heróis com olhos azuis ("blue").

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({ "aspects.eyeColor": "blue" });
```

</details>

---

### Exercício 9:

Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos
("black") ou carecas ("no hair").

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({
  "aspects.hairColor": { $in: ["black", "no hair"] },
});
```

</details>

---

### Exercício 10:

Retorne o total de super-heróis com cabelos pretos ("black") ou carecas ("no hair").

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": { $in: ["black", "no hair"] },
});
```

</details>

---

### Exercício 11:

Retorne o total de super-heróis que não tenham cabelos pretos ("black") ou não sejam
carecas.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": { $nin: ["black", "no hair"] },
});
```

</details>

---

### Exercício 12:

Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.
80m de altura.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $not: { $gt: 180 } } });
```

</details>

---

### Exercício 13:

Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({
  $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }],
});
```

</details>

---

### Exercício 14:

Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados
pela Marvel Comics.

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({
  $and: [
    { publisher: "Marvel Comics" },
    {
      $or: [{ "aspects.height": 180 }, { "aspects.height": 200 }],
    },
  ],
});
```

</details>

---

### Exercício 15:

Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou
Mutantes e não sejam publicados pela DC Comics.

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({
  $and: [
    {
      "aspects.weight": {
        $gte: 80,
        $lte: 100,
      },
    },
    {
      race: {
        $in: ["Human", "Mutant"],
      },
    },
    {
      publisher: {
        $ne: "DC Comics",
      },
    },
  ],
});
```

</details>

---

### Exercício 16:

Retorne o total de documentos que não contêm o campo race.

<details>

<summary>Resposta</summary>

```js
db.superheroes.find({
  race: {
    $exists: false,
  },
});
```

</details>

---

### Exercício 17:

Retorne o total de documentos que contêm o campo hairColor.

<details>

<summary>Resposta</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": {
    $exists: true,
  },
});
```

</details>

---

### Exercício 18:

Remova apenas um documento publicado pela Sony Pictures.

<details>

<summary>Resposta</summary>

```js
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
```

</details>

---

### Exercício 19:

Remova todos os documentos publicados pelo George Lucas.

<details>

<summary>Resposta</summary>

```js
db.superheroes.deleteMany({ publisher: "George Lucas" });
```

</details>

---
