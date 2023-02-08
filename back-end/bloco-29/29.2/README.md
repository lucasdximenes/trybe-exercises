# MongoDB - Filter Operators

---

## Exercises:

> For the following exercises use the file [superheroes.json](./superheroes.json) and import with the command `mongoimport --db class --collection superheroes --file superheroes.json`.

The documents have the following structure:

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

### Exercise 1

Inspect a document so that you become familiar with them. Understand the existing fields and levels in the chosen document.

<details>

<summary>Answer</summary>

```js
db.superheroes.findOne();
```

</details>

---

### Exercise 2

Select all superheroes under 6 feet tall. Remember that this information is recorded in centimeters.

<details>

<summary>Answer</summary>

```js
db.superheroes.find({ "aspects.height": { $lt: 180 } });
```

</details>

---

### Exercise 3

Return the total number of superheroes shorter than 1.80m.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $lt: 180 } });
```

</details>

---

### Exercise 4

Return total superheroes up to 1.80m.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $lte: 180 } });
```

</details>

---

### Exercise 5:

Select a superhero who is 2.00m or taller.

<details>

<summary>Answer</summary>

```js
db.superheroes.findOne({ "aspects.height": { $gte: 200 } });
```

</details>

---

### Exercise 6:

Return total superheroes with 2.00m or more.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $gte: 200 } });
```

</details>

---

### Exercise 7:

Select all superheroes that have green ("green") eyes.

<details>

<summary>Answer</summary>

```js
db.superheroes.find({ "aspects.eyeColor": "green" });
```

</details>

---

### Exercise 8:

Return the total number of superheroes with blue eyes.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({ "aspects.eyeColor": "blue" });
```

</details>

---

### Exercise 9:

Using the $in operator, select all superheroes with black hair
("black") or bald ("no hair").

<details>

<summary>Answer</summary>

```js
db.superheroes.find({
  "aspects.hairColor": { $in: ["black", "no hair"] },
});
```

</details>

---

### Exercise 10:

Return the total number of superheroes with black hair or no hair.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": { $in: ["black", "no hair"] },
});
```

</details>

---

### Exercise 11:

Return the total number of superheroes that do not have black hair or are not
bald.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": { $nin: ["black", "no hair"] },
});
```

</details>

---

### Exercise 12:

Using the $not operator, return the total number of superheroes that have no more than 1.
80m high.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({ "aspects.height": { $not: { $gt: 180 } } });
```

</details>

---

### Exercise 13:

Select all superheroes that are not human or taller than 6 feet.

<details>

<summary>Answer</summary>

```js
db.superheroes.find({
  $nor: [{ race: "Human" }, { "aspects.height": { $gt: 180 } }],
});
```

</details>

---

### Exercise 14:

Select all superheroes 1.80m or 2.00m tall and published
by Marvel Comics.

<details>

<summary>Answer</summary>

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

### Exercise 15:

Select all superheroes weighing between 80kg and 100kg, whether Human or
Mutants and not published by DC Comics.

<details>

<summary>Answer</summary>

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

### Exercise 16:

Return the total number of documents that do not contain the race field.

<details>

<summary>Answer</summary>

```js
db.superheroes.find({
  race: {
    $exists: false,
  },
});
```

</details>

---

### Exercise 17:

Return the total number of documents that contain the hairColor field.

<details>

<summary>Answer</summary>

```js
db.superheroes.countDocuments({
  "aspects.hairColor": {
    $exists: true,
  },
});
```

</details>

---

### Exercise 18:

Only remove a document published by Sony Pictures.

<details>

<summary>Answer</summary>

```js
db.superheroes.deleteOne({ publisher: "Sony Pictures" });
```

</details>

---

### Exercise 19:

Remove all documents published by George Lucas.

<details>

<summary>Answer</summary>

```js
db.superheroes.deleteMany({ publisher: "George Lucas" });
```

</details>

---
