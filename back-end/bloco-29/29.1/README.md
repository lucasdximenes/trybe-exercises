# Introduction to MongoDB

---

## Exercises:

> Using the [bios](https://www.mongodb.com/docs/manual/reference/bios-example-collection/) collection, do the following exercises:

### 1. Return the document with \_id equal to 8.

<details>

<summary>Show answer</summary>

   <p>

```js
db.bios.find({ _id: 8 });
```

   </p>

</details>

---

### 2. Return the document with \_id equal to 8, but only display the attributes: \_id and name .

<details>
   <summary>Show reply</summary>
   <p>

```js
db.bios.find({ _id: 8 }, { _id: 1, name: 1 });
```

   </p>

</details>

---

### 3. Return only the name and birth attributes of the document with \_id equal to 8.

<details>
   <summary>Show reply</summary>
   <p>

```js
db.bios.find({ _id: 8 }, { name: 1, birth: 1, _id: 0 });
```

   </p>

</details>

---

### 4. Return all documents where the name.first attribute equals **John**, using the pretty() method.

<details>
   <summary>Show answer</summary>
   <p>

```js
db.bios.find({ "name.first": "John" }).pretty();
```

   </p>

</details>

---

### 5. Return the first 3 documents from the bios collection using the pretty() method.

<details>
   <summary>Show answer</summary>
   <p>

```js
db.bios.find().limit(3).pretty();
```

   </p>

</details>

---

### 6. Return 2 documents from the bios collection skipping the first 5 documents.

<details>
   <summary>Show reply</summary>
   <p>

```js
db.bios.find().skip(5).limit(2);
```

   </p>

</details>

---

> Using the [books.json](./books.json) file, import it using `mongoimport` and use the `books` collection to perform the exercises below:

### 7. Return the number of documents in the books collection.

<details>
   <summary>Show answer</summary>
   <p>

```js
db.books.countDocuments();
```

   </p>

</details>

---

### 8. Count how many books there are with status "PUBLISH" .

<details>
   <summary>Show reply</summary>
   <p>

```js
db.books.countDocuments({ status: "PUBLISH" });
```

   </p>

</details>

---

### 9. Display the title , isbn , and pageCount attributes of the first 3 books. DO NOT return the \_id attribute.

<details>
   <summary>Show reply</summary>
   <p>

```js
db.books.find({}, { title: 1, isbn: 1, pageCount: 1, _id: 0 }).limit(3);
```

   </p>

</details>

---

### 10. Skip 5 documents and display the \_id , title , authors and status attributes of books with "MEAP" status, limiting yourself to 10 documents.

<details>
   <summary>Show reply</summary>
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
