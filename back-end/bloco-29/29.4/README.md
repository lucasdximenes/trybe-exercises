# MongoDB - Simple Updates

---

> Use the command below to create a database called `movies` and insert the documents below:

```js
use movies;
db.movies.insertMany([
   {
     title: "Batman",
     category: [ "action", "adventure" ],
     imdbRating: 7.6,
     budget: 35
   },
   {
     title: "Godzilla",
     category: [ "action", "adventure", "sci-fi" ],
     imdbRating: 6.6
   },
   {
     title: "Home Alone",
     category: [ "family", "comedy" ],
     imdbRating: 7.4
   }
]);
```

---

> ## For each run, use the find() method to check the documents for changes

---

**Exercise 1**: Change the `imdbRating` to `7.7` in the movie `Batman`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $set: { imdbRating: 7.7 } });
```

</details>

---

**Exercise 2**: Change `budget` to `1` in the movie `Godzilla`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Godzilla" }, { $set: { budget: 1 } });
```

</details>

---

**Exercise 3**: Change `budget` to `15` and `imdbRating` to `5.5` in the movie `Home Alone`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne(
  { title: "Home Alone" },
  { $set: { budget: 15, imdbRating: 5.5 } }
);
```

</details>

---

**Exercise 4**: Increase the `imdbRating` of the movie `Batman` by `2`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $inc: { imdbRating: 2 } });
```

</details>

---

**Exercise 5**: Increase the `budget` for the movie `Home Alone` by `5`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Home Alone" }, { $inc: { budget: 5 } });
```

</details>

---

**Exercise 6**: Multiply the `imdbRating` of the movie `Batman` by `4`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Batman" }, { $mul: { imdbRating: 4 } });
```

</details>

---

**Exercise 7**: Rename the `budget` field to `estimatedBudget` from the movie `Batman`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne(
  { title: "Batman" },
  { $rename: { budget: "estimatedBudget" } }
);
```

</details>

---

**Exercise 8**: Use the `$min` operator to change the `budget` to `5` for the movie `Home Alone`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne({ title: "Home Alone" }, { $min: { budget: 5 } });
```

</details>

---

**Exercise 9**: Use the `$max` operator to change the `imdbRating` to `8.6` for the movie `Godzilla`. Also, change the `"adventure"` category to `"thriller"` from the movie `Godzilla`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne(
  { title: "Godzilla" },
  {
    $max: { imdbRating: 8.6 },
    $set: {
      "category.1": "thriller",
    },
  }
);
```

</details>

---

**Exercise 10**: Using the `$currentDate` operator, create a field called `lastUpdated` with type `timestamp` in the movie `Home Alone`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateOne(
  { title: "Home Alone" },
  { $currentDate: { lastUpdated: { $type: "timestamp" } } }
);
```

</details>

---

**Exercise 11**: Using a single operation, create a field called `sequels` and assign it the value `0` in all documents.

<details>
   <summary>Response:</summary>

```js
db.movies.updateMany({}, { $set: { sequels: 0 } });
```

</details>

---

**Exercise 12**: Using a single operation, remove the fields `budget` and `estimatedBudget` in all documents.

<details>
   <summary>Response:</summary>

```js
db.movies.updateMany(
  {},
  {
    $unset: {
      budget: "",
      estimatedBudget: "",
    },
  }
);
```

</details>

---

**Exercise 13**: For `Batman` or `Home Alone` movies, set `imdbRating` to value `17`, if the value of `imdbRating` is less than `17`.

<details>
   <summary>Response:</summary>

```js
db.movies.updateMany(
  { title: { $in: ["Batman", "Home Alone"] } },
  { $max: { imdbRating: 17 } }
);
```

</details>

---

## Bonus Exercises

> Copy and paste the code below into the mongo shell to prepare the exercises:

```js
use class;
db.xmen.insertMany([
   {
     "name": "Storm",
     "true_name": "Ororo Munroe",
     "origin": "New York",
     "occupation": "Headmistress",
     "powers": [
       "Atmokinesis",
       "Hydrokinesis",
       "Pyrokinesis",
       "Aerokinesis",
       "Flight",
       "Cryokinesis",
       "Electrokinesis",
       "Mental stamina",
       "Electrolysis",
       "Electromagnetism",
       "Wind Energy Manipulation",
       "Magical Potential",
       "Combat and Robbery",
       "Physical Abilities and Traits",
       "Nerve Manipulation"
       ],
     "class": "omega"
   },
   {
     "name": "Beast",
     "true_name": "Henry Phillip McCoy",
     "origin": "Illinois",
     "occupation": "Deputy Principal",
     "powers": [
       "Genius level intellect",
       "Sharp claws",
       "Sharp teeth",
       "Superhuman Strength, Agility, Stamina, and Speed"
     ],
     "class": "unknown"
   },
   {
     "name": "Vampire","true_name": "Anna Marie LeBeau",
     "origin": "Mississippi",
     "occupation": "Senior Staff",
     "powers": [
       "suck life energy, memories and powers from other mutants through their skin"
     ],
     "class": "omega"
   },
   {
     "name": "Iceman",
     "true_name": "Robert Louis Drake",
     "origin": "New York",
     "occupation": "Senior Staff",
     "powers": [
       "Manipulating moisture in the air to turn vapor into ice",
       "Turn Your Body to Ice"
     ],
     "class": "alpha"
   },
   {
     "name": "Marvel Girl",
     "true_name": "Rachel Summers",
     "origin": "Eastern United States",
     "occupation": "Senior Staff",
     "powers": [
       "Telepathy",
       "Telekinesis",
       "Energy Bursts",
       "Residue Phoenix Force"
     ],
     "class": "omega"
   },
   {
     "name": "Polar Star",
     "true_name": "Jean-Paul",
     "origin": "Montreal",
     "occupation": "Senior Staff",
     "powers": [
       "Flight",
       "Durability",
       "Super speed",
       "Generation of light",
       "Balance",
       "agility",
       "above-normal reflexes",
       "Strength"
     ],
     "class": "unknown"
   },
   {
     "name": "Firestar",
     "true_name": "Angelica Jones",
     "origin": "North American",
     "occupation": "Senior Staff",
     "powers": [
       "Ability to exploit Earth's electromagnetic field"
     ],
     "class": "unknown"
   },
   {
     "name": "Camera",
     "true_name": "Jonothon 'Jono' Evan Starsmore",
     "origin": "British",
     "occupation": "Junior Staff",
     "powers": [
       "Powerful psychokinetic energy expelled from his chest",
       "Telepathic Communication"
     ],
     "class": "range"
   },
   {
     "name": "Frenzy",
     "true_name": "Joanna Cargill",
     "origin": "North American",
     "occupation": "Junior Staff",
     "powers": [
       "Skin Rigid As Steel",
       "Super strength"
     ],
     "class": "unknown"
   },
   {
     "name": "Karma",
     "true_name": "Xi'an Coy Manh",
     "origin": "Vietnam",
     "occupation": "Junior Staff",
     "powers": [
       "Mental Possession"
       "Remote Possession",
       "Illusion Cast",
       "Psychic Shield",
       "Sensory analysis",
       "Mind control"
     ],
     "class": "unknown"
   },
   {
     "name": "Scalp",
     "true_name": "Paige Elisabeth Guthrie",
     "origin": "North American",
     "occupation": "Junior Staff",
     "powers": [
       "Superhuman Strength",
       "Superhuman Speed",
       "Superhuman Durability",
       "Flame projection (magma form)",
       "Impact absorption elasticity",
       "Amphibious Talents"
     ],
     "class": "range"
   },
   {
     "name": "Prey",
     "true_name": "Ava'Dara Naganandin",
     "origin": "Shi'ar Empire",
     "occupation": "Junior Staff",
     "powers": [
       "Superhuman Strength",
       "Superhuman Stamina"
     ],
     "class": "unknown"
   },
   {
     "name": "Deathlock",
     "true_name": "Luther Manning",
     "origin": "Michigan",
     "occupation": "Adjunct Staff/Campus Guard",
     "powers": [
       "Cybernetic enhancements granting superhuman speed, strength, durability, and reflexes"
     ],
     "class": "unknown"
   },
   {
     "name": "Doop",
     "true_name": "Doop",
     "origin": "Unknown",
     "occupation": "Adjunct Staff",
     "powers": [
       "Flight",
       "Accelerated Healing Factor Strength",
       "superhuman durability",
       "Physical malleability",
       "Ability to replicate physical objects",
       "Extra-dimensional void inside the body that can store objects and people"
     ],
     "class": "unknown"
   },
   {
     "name": "Colossus",
     "true_name": "Piotr 'Peter' Nikolaievitch",
     "origin": "Siberia",
     "occupation": "Member",
     "powers": [
       "Organic Steel Transmutation",
       "Super strength",
       "Superhuman Stamina",
       "Super Stamina",
       "Increased Agility and Speed",
       "Inability to Bleed"
     ],
     "class": "omega"
   },
   {
     "name": "Night",
     "true_name": "Kurt Wagner",
     "origin":"Bavaria, Germany",
     "occupation": "Member",
     "powers": [
       "Teleportation",
       "Super Agility",
       "Physical Adherence"
       "Ability to merge with shadows"
     ],
     "class": "range"
   },
   {
     "name": "Kid Omega",
     "true_name": "Quentin Quire",
     "origin":"North American",
     "occupation": "Member",
     "powers": [
       "Omega-Level Telepathy",
       "Telekinesis",
       "Genius Intellect"
     ],
     "class": "omega"
   },
   {
     "name": "Fairy",
     "true_name": "Megan Gwynn",
     "origin":"Wales",
     "occupation": "Member",
     "powers": [
       "Wings",
       "Hallucinogenic Dust",
       "Teleportation",
       "Magic"
     ],
     "class": "range"
   },
   {
     "name": "Armor",
     "true_name": "Hisako Ichiki",
     "origin":"Tokyo",
     "occupation": "Member",
     "powers": ["Psionic Armor"],
     "class": "unknown"
   },
   {
     "name": "Jubilee",
     "true_name": "Jubilation Lee",
     "origin":"California",
     "occupation": "Member",
     "powers": [
       "Plasmatic Energy",
       "Telepathic Immunity"
     ],
     "class": "unknown"
   },
   {
     "name": "Kavita Rao",
     "true_name": "Kavita Rao",
     "origin":"Calcutta, India",
     "occupation": "Resident Physician",
     "powers": [],
     "class": "unknown"
   },
   {
     "name": "Cecilia Reyes",
     "true_name": "Cecilia Reyes",
     "origin":"New York",
     "occupation": "Resident Physician",
     "powers": [
       "Force field"
     ],
     "class": "unknown"
   },
   {
     "name": ["Angel", "Archangel"],
     "true_name": "Warren Kenneth Worthington III",
     "origin":"New York",
     "occupation": ["Assistant", "Recruiter"],
     "powers": [
       "Force field"
     ],
     "class": "Beta"
   },
   {
     "name": "Spiderman",
     "true_name": "Peter Parker",
     "origin":"New York",
     "occupation": ["Counselor","Deputy Body"],
     "powers": [
       "Superhuman Strength",
       "Spider-Sensor",
       "Physical Grip"
     ],
     "class": "unknown"
   }
]);
```

---

> The information above is about the Jean Gray School of Higher Learning. For all changes made, you should always update or add the `lastUpdate` field, which stores the date of the last change with **timestamp** type. The exercises must be performed in order.

---

**Exercise 14**: Remove the `class` field from documents that have this field with the value `unknown`.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  { class: "unknown" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $unset: {
      class: "",
    },
  }
);
```

</details>

---

**Exercise 15**: Produce **a** _query_ that renames the fields from `name` to `hero_name`, and from `true_name` to `full_name`; add the `power` field with value 100, in all documents.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  {},
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $rename: {
      name: "hero_name",
      true_name: "full_name",
    },
    $set: {
      power: 100,
    },
  }
);
```

</details>

---

**Exercise 16**: Produce **a** _query_ where the `class` omega or gamma mutants have their power 500 **only if their power is less than 500**.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  { class: { $in: ["omega", "gamma"] } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $max: {
      power: 500,
    },
  }
);
```

</details>

---

**Exercise 17**: Produce **a** _query_ where `class` gamma mutants have their power of 300 **only if their power is greater than 300**.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  { class: "range" },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $min: {
      power: 300,
    },
  }
);
```

</details>

---

**Exercise 18**: Decrease the power of mutants that don't have the `class` property by 100.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  { class: { $exists: false } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $inc: {
      power: -100,
    },
  }
);
```

</details>

---

**Exercise 19**: In just **one** query add the field `areas` with the following array as value: `["Students Room"]` to all mutants that are `Senior Staff` that have power above of 100 and for all `Junior Staff` with power above 200.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  {
    $or: [
      { occupation: "Senior Staff", power: { $gt: 100 } },
      { occupation: "Junior Staff", power: { $gt: 200 } },
    ],
  },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Students Room"],
    },
  }
);
```

</details>

---

**Exercise 20**: In just **one** query, add the `areas` field with `["Outside"]` to all `Junior Staff` that do not have the `areas` field defined.

<details>
<summary>Answer</summary>

```js
db.xmen.updateMany(
  { occupation: "Junior Staff", areas: { $exists: false } },
  {
    $currentDate: {
      lastUpdate: { $type: "timestamp" },
    },
    $set: {
      areas: ["Outside"],
    },
  }
);
```

</details>

---
