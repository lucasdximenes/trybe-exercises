# Asynchronous JavaScript and Callbacks

---

## Now the practice:

---

> Before starting, install the packages with the command:
>
> - `npm install`
> - Tests will be performed with jest: `npm test`

---

### Exercise 1

1. Given the code below, what is the execution order of the commented lines?

<details>
<summary>Exercise code 1</summary>

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
console.log(planetDistanceFromSun(venus)); // B
console.log(planetDistanceFromSun(jupiter)); // Ç
```

</details>

<details>
<summary>Answer</summary>

#### > A, B, C

</details>

---

### Exercise 2

2. Now, given the code below, what is the execution order of the commented lines?
<details>
<summary>Exercise code 2</summary>

```
const planetDistanceFromSun = ({ name, distanceFromSun: { value, measurementUnit } }) =>
  `${name} is ${value} ${measurementUnit} apart from the Sun`;

const mars = {
  name: "Mars",
  distanceFromSun: {
    value: 227900000,
    measurementUnit: "kilometers",
  },
};

const venus = {
  name: "Venus",
  distanceFromSun: {
    value: 108200000,
    measurementUnit: "kilometers",
  },
};

const jupiter = {
  name: "Jupiter",
  distanceFromSun: {
    value: 778500000,
    measurementUnit: "kilometers",
  },
};

console.log(planetDistanceFromSun(mars)); // A
setTimeout(() => console.log(planetDistanceFromSun(venus)), 3000); // B
setTimeout(() => console.log(planetDistanceFromSun(jupiter)), 2000); // Ç
```

</details>

<details>
<summary>Answer</summary>

#### > A, C, B

</details>

---

### [Exercise 3](./exercise_3/script.js)

3. The `getPlanet` function below prints the planet Mars synchronously. Modify `getPlanet` so that Mars is printed asynchronously after 4 seconds.

<details>
<summary>Exercise code 3</summary>

```
const getPlanet = () => {
  const mars = {
    name: "Mars",
    distanceFromSun: {
      value: 227900000,
      measurementUnit: "kilometers",
    },
  };
  console.log("Returned planet: ", mars);
};

getPlanet(); // print Mars after 4 seconds
```

</details>

---

### [Exercise 4](./exercise_4/script.js)

4. Suppose you need to simulate a message sent from the robot [Curiosity](https://mars.nasa.gov/) from Mars to Earth. `Curiosity` sends the current temperature on Mars to Earth, taking a variable time of up to 5 seconds for it to finish sending. Create the `sendMarsTemperature` function, which prints the temperature on Mars.

<details>
<summary>Exercise code 4</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// create the sendMarsTemperature function below

sendMarsTemperature(); // print "Mars temperature is: 20 degree Celsius", for example
```

</details>

---

### [Exercise 5](./exercise_5/script.js)

5. Now that you've done the function that sends the temperature of Mars, suppose you manage to send the robot `Curiosity` what you want to do, once you have successfully obtained the temperature on Mars. Then, add in the `sendMarsTemperature` function a `callback` that contains the actions to be taken upon the temperature.

<details>
<summary>Exercise code 5</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definition of the sendMarsTemperature function...

sendMarsTemperature(temperatureInFahrenheit); // print "It is currently 47ºF at Mars", for example
sendMarsTemperature(greet); // print "Hi there! Curiosity here. Right now is 53ºC at Mars", for example
```

</details>

---

### [Exercise 6](./exercise_6/script.js)

6. Finally, the `Curiosity` robot has a 60% message sending success rate due to the robot being too busy with other operations. Then, add another `callback` to the `sendMarsTemperature` function that contains the actions to be taken in case of failure.

<details>
<summary>Exercise code 6</summary>

```
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definition of the sendMarsTemperature function...

// print "It is currently 47ºF at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// print "Hi there! Curiosity here. Right now is 53ºC at Mars", for example, or "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);
```

</details>

---

### [Exercise 7](./tests/exercise_7.test.js)

7. Write a test that checks the _callback_ call of an `uppercase` function, which transforms the letters of a word into uppercase. Remember to beware of false positives in asynchronous tests.

<details>
<summary>Exercise code 7</summary>

```
const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
```

</details>

---

### [Exercise 8](./exercise_8/script.js)

8. For the next exercise, you'll experience the first day of a Pokémon trainer! In Professor Oak's lab, you are informed that there are three Pokemon available: Bulbasaur, Charmander, and Squirtle. Complete the `getPokemonDetails` function call so that it prints the details of the pokémon you have chosen to the console. PS: it is possible that Professor Carvalho's system presents errors if the pokémon doesn't exist in the database, so don't forget to treat them too, okay?

<details>
<summary>Exercise code 8</summary>

```
const pokemons = [
  {
    name: 'Bulbasaur',
    type: 'Grass',
    ability: 'Razor Leaf',
  },
  {
    name: 'Charmander',
    type: 'Fire',
    ability: 'Ember',
  },
  {
    name: 'Squirtle',
    type: 'Water',
    ability: 'Water Gun',
  },
];

function getPokemonDetails(filter, callback) {
  setTimeout(() => {
    if (pokemons.find(filter) === undefined) {
      return callback(new Error('We don't have this pokémon for you :('), null);
    }
    const pokemon = pokemons.find(filter);

    const { name, type, ability } = pokemon;

    const messageFromProfOak = `Hello, your pokemon is ${name}, its type is ${type} and its main ability is ${ability}`;

    callback(null, messageFromProfOak);
  }, 2000);
}

getPokemonDetails();

module.exports = {
  getPokemonDetails,
};
```

</details>

---

### [Exercise 9](./tests/exercise_9.test.js)

9. In order to prevent future trainers from being harmed, Professor Oak asked you to help him write tests for the system that distributes pokemons. Create a new `.test.js` or `.spec.js` file and copy the code below. Complete the tests for the `getPokemonDetails` function as per the specification.

<details>
<summary>Exercise code 9</summary>

```
// Check that the correct file is being imported.
const { getPokemonDetails } = require("./get-pokemon-details");

describe("The getPokemonDetails function", () => {
  it("returns error when looking for a pokemon that doesn't exist in the database", () => {
    // Write your code here
  });

  it("returns a pokemon that exists in the database", () => {
    // Write your code here
  });
});
```

</details>

---

### Exercise 10

10. For this exercise, try to guess the `console.log` output from the tests below without running them, and make sure you understand how `beforeEach` and `afterEach` works.

<details>
<summary>Exercise code 10</summary>

```
beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
```

</details>

<details>
<summary>Answer</summary>

#### > 1 - beforeEach

#### > 1 - test

#### > 1 - afterEach

#### > 1 - beforeEach

#### > 2 - beforeEach

#### > 2 - test

#### > 2 - afterEach

#### > 1 - afterEach

</details>
