# MongoDB - Query Operators

---

## Exercises:

> To run the exercises, use the following command:

<details>

<summary>Data</summary>

```sh
use cinema;
db.movies.drop();
db.movies.insertMany([
   {
     title: "Batman",
     category: [
       "action",
       "adventure"
     ],
     imdbRating: 7.7,
     budget: 35,
     grossWorldwide: 411,
     ratings: [ 85, 100, 102, 105 ],
     description: "The Dark Knight of Gotham City begins his war on crime with his first major enemy being Jack Napier, a criminal who becomes the clownishly homicidal Joker."
   },
   {
     title: "Godzilla",
     category: [
       "action",
       "adventure",
       "sci-fi"
     ],
     imdbRating: 6.6,
     budget: 160,
     grossWorldwide: 524,
     Ratings: [78, 52, 95, 102],
     description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."
   },
   {
     title: "Home Alone",
     category: [
       "family",
       "comedy"
     ],
     imdbRating: 7.4,
     budget: 0,
     gross Worldwide: 476,
     ratings: [ 200, 99, 65 ],
     description: "An eight-year-old troublemaker must protect his house from him from a pair of burglars when he is accidentally left home alone by his family during Christmas vacation."
   },
   {
     title: "Matrix",
     category: [
       "sci-fi",
       "action"
     ],
     imdbRating: 8.7,
     budget: 63,
     grossWorldwide: 467,
     Ratings: [77, 92, 150, 180],
     description: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence."
   },
   {
     title: "Pulp Fiction",
     category: [
       "crime",
       "drama"
     ],
     imdbRating: 8.9,
     budget: 8,
     grossWorldwide: 213,
     ratings: [ 110, 84, 95, 90 ],
     description: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption."
     },
    {
      title: "Stealth",
      category: [
        "action",
        "adventure",
        "sci-fi"
      ],
      imdbRating: 5.1,
      budget: 135,
      gross Worldwide: 79,
      ratings: [ 50, 48, 39, 67 ],
      description: "Deeply ensconced in a top-secret military program, three pilots struggle to bring an artificial intelligence program under control before it initiates the next world war."
    }
]);
```

</details>

---

#### 1. Using the `$all` operator, return all movies that contain both `action` and `adventure` in the _array_ `category`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  category: {
    $all: ["action", "adventure"],
  },
});
```

</details>

---

#### 2. 🚀 Now return movies that contain `action` and `sci-fi` in _array_ `category` and have **IMDB** rating greater than `7`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  category: {
    $all: ["action", "sci-fi"],
  },
  imdbRating: {
    $gt: 7,
  },
});
```

</details>

---

#### 3. Return all movies with `ratings` greater than `103`, displaying only the `title` and `ratings` fields.

<details>

<summary>Answer</summary>

```js
db.movies.find(
   {
     ratings: {
       $elemMatch: {
         $gt: 103,

       },
     },
     {
       title: 1,
       ratings: 1,
       _id: 0,
     }
   }
)
```

</details>

---

#### 4. 🚀 Return all movies with `ratings` between `100` and `105`, displaying only the `title` and `ratings` fields.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 100,
        $lte: 105,
      },
    },
  },
  {
    title: 1,
    ratings: 1,
    _id: 0,
  }
);
```

</details>

---

#### 5. 🚀 Return all movies where at least one element of `ratings` is between `64` and `105` and is divisible by `9`, display only the `title` and `ratings` fields.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 64,
        $lte: 105,
        $mod: [9, 0],
      },
    },
  },
  {
    title: 1,
    ratings: 1,
    _id: 0,
  }
);
```

</details>

---

#### 6. Return movies in the `adventure` category and with `ratings` greater than `103`, displaying only the `title`, `ratings` and `category` fields.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    category: "adventure",
    ratings: {
      $elemMatch: {
        $gt: 103,
      },
    },
  },
  {
    title: 1,
    ratings: 1,
    category: 1,
    _id: 0,
  }
);
```

</details>

---

#### 7. Return only the title of all movies with two elements in the _array_ `category`.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    category: {
      $size: 2,
    },
  },
  {
    title: 1,
    _id: 0,
  }
);
```

</details>

---

#### 8. 🚀 Return only the title of all movies with four elements in the _array_ `ratings`.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    ratings: {
      $size: 4,
    },
  },
  {
    title: 1,
    _id: 0,
  }
);
```

</details>

---

#### 9. Search for movies where modulus 5 of the `budget` field is 0 and the `category` array has size `2`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  budget: {
    $mod: [5, 0],
  },
  category: {
    $size: 2,
  },
});
```

</details>

---

#### 10. 🚀 Return movies from the `"sci-fi"` category or that have `ratings` greater than `199`, displaying only the `title`, `ratings` and `category` fields.

<details>

<summary>Answer</summary>

```js
db.movies.find(
  {
    $or: [
      {
        category: "sci-fi",
      },
      {
        ratings: {
          $elemMatch: {
            $gt: 199,
          },
        },
      },
    ],
  },
  {
    title: 1,
    ratings: 1,
    category: 1,
    _id: 0,
  }
);
```

</details>

---

#### 11. Return movies whose `ratings` have a size of 4 and are in the `category` `"adventure"` or `"family"`, but do not have an `imdbRating` less than 7.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  ratings: {
    $size: 4,
  },
  category: {
    $in: ["adventure", "family"],
  },
  imdbRating: {
    $not: {
      $lt: 7,
    },
  },
});
```

</details>

---

#### 12. 🚀 Using the `$regex` operator, return all movies where the description starts with the word `"The"`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  description: {
    $regex: /^The/,
  },
});
```

</details>

---

#### 13. Using the `$regex` operator, return all movies where the description ends with the word `"humanity."`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  description: {
    $regex: /humanity.$/,
  },
});
```

</details>

---

#### 14. Using the `$expr` operator, return all movies where `budget` is less than `grossWorldwide`.

<details>

<summary>Answer</summary>

```js
db.movies.find({
  $expr: {
    $lt: ["$budget", "$grossWorldwide"],
  },
});
```

</details>

---
