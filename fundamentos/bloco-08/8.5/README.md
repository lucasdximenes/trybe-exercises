# JavaScript ES6 - spread operator, rest parameter, destructuring and more

---

## Now the practice

---

### [Exercise 1](./exercise_1/script.js)

1. Given the code below, complete it so that the area of ​​the 3 rectangles is printed. The code should return `2`, `15` and `54` in sequence.

   - Tip: use `spread operator`.

```
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea() // change the rectangleArea function call
  console.log(rectangle[0] * rectangle[1]);
});
```

---

### [Exercise 2](./exercise_2/script.js)

2. Create a `sum` function that given a variable number of elements returns the sum of those elements.

   - Tip: use `rest parameter`.

---

### [Exercise 3](./exercise_3/script.js)

3. Write the `personLikes` function, which given a parameter object representing a person, returns all the likes of that person, as shown below:

   - Tip: use `object destructuring`.

```
const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete the function signature below
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'
```

---

### [Exercise 4](./exercise_4/script.js)

4. Write a `filterPeople` function that, given a list of people, returns all Australian people who were born in the 20th century:

   - Tip: use `object destructuring`.

```
const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// write filterPeople below
```

---

### [Exercise 5](./exercise_5/script.js)

5. Write the `swap` function, which given an array of 3 elements, returns a new array with the first and third elements swapped. Detail: you need to do this function by spending 1 line only:

   - Tip: use `array destructuring`.

```
const myList = [1, 2, 3];

// write swap below
```

---

### [Exercise 6](./exercise_6/script.js)

6. Suppose you are dealing with cars, and as the problem was handed to you, each car is modeled as an array. However, this modeling is low level. Creates a `toObject` function that, given a list, returns an object representing the car:

   - Tip: use `array destructuring` and `abbreviation object literal`.

```
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// write toObject below
```

---

### [Exercise 7](./exercise_7/script.js)

7. Write a `shipLength` function that, given an object representing a ship, returns its length, also showing the appropriate length unit:

   - Tip: use `object destructuring`.

```
const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// write shipLength below

console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'
```

---

### [Exercise 8](./exercise_8/script.js)

8. Write a `greet` function that, given a person's name, returns a greeting message:

   - Tip: use `default params`.

```
// write greet below

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Hi')) // 'Hi Isabela'
```

---

### [Exercise 9](./exercise_9/script.js)

9. There is a `yearSeasons` object that represents the seasons. Each season is a key of this object and the value of each key is an array of strings, representing the months of that season. From this object, unstructure the seasons and spread them out in an array of months of the year.

   - Tip: use `object destructuring` and `spread operator`.

   - OBS: The seasons described here are based on the seasons of the northern hemisphere.

---
