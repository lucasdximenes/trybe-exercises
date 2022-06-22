# JavaScript ES6 - Introduction to Higher Order Functions

---

## Now the practice

### [Exercise 1](./exercise_1.js)

1. Create a function that returns an object in the form `{ fullname, email }` representing a new hire. Pass your function as a parameter of the HOF `newEmployees` to create each person hired in their respective id. Your function must receive as a parameter the full name of the employee and from that automatically generate an email in the format `person_name@trybe.com`.

```
const newEmployees = () => {
  const employees = {
    id1: '', // Name: Pedro Guerra -> Call your function passing the name Pedro Guerra as a parameter, replacing the quotes
    id2: '', // Name: Luiza Drumond -> Call your function passing the name Luiza Drumond as a parameter, replacing the quotes
    id3: '', // Name: Carla Paiva -> Call your function passing the name Carla Paiva as a parameter, replacing the quotes
  }
  return employees;
};
```

---

### [Exercise 2](./exercise_2.js)

2. Develop a HOF that returns the result of a draw. This HOF will generate a random number between 1 and 5 receiving as parameters the number bet and a function that checks if the number bet is equal to the number drawn. The return of your HOF must be a string (Ex: "Try again" or "Congratulations you won").

---

### [Exercise 3](./exercise_3.js)

3. Create a HOF that will receive three parameters. The first will be an array of correct answers (Guide), the second will be an array of answers to be verified (answers from the student person) and the third is a function that checks if the answers are correct and counts the final score received by the student. student person. At the end, the HOF must return the total number of correct answers.

   - When the answer is correct, the score goes up 1 point, when it is incorrect, it goes down 0.5 points, and when there is no answer ("N.A"), the score is not changed.

```
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
```

---

## bonus

### [Part I - Game Actions Simulator](./exercise_4.js)

> In these exercises you will implement HOFs that simulate a battle turn in a game. You will create functions that calculate damage, update status, and at the end, return the results of the round.
> For the next exercises, copy the code below.

```
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
```

1. Create a function that returns dragon damage.

   - The damage will be a random number between 15 (minimum damage) and the strength attribute value (maximum damage).

2. Create a function that returns the damage dealt by the warrior.

   - The damage will be a random number between the strength attribute value (minimum damage) and the strength \* weaponDmg value (maximum damage).

3. Create a function that returns an object with two keys and two values ​​containing the damage and mana spent by the mage in one turn.

   - The damage will be a random number between the value of the intelligence attribute (minimum damage) and the value of intelligence \* 2 (maximum damage).

   - Mana consumed per turn is 15. In addition, the function must have a conditional, if the mage has less than 15 mana, the damage value receives a message (Ex: "You don't have enough mana") and the mana spent is 0 .

---

### [Part II - Battle Simulator](./exercise_4.js)

> Now that you already have the implementation of the functions related to the three previous exercises, pass them as parameters to other functions that will compose a gameActions object. The object will be composed of game actions and each action is by definition a HOF, because in this case, they are functions that receive another function as a parameter.
> Copy the code below and start its implementation:

```
const gameActions = {
  // Create the HOFs on this object.
};
```

1. Create the first HOF that makes up the `gameActions` object. It will be the function that simulates the `warrior` character's turn. This HOF will receive as a parameter the function that calculates the damage done by the `warrior` character and will update the `healthPoints` of the `dragon` monster. In addition it must also update the value of the `damage` key of the `warrior`.

2. Create the second HOF that makes up the `gameActions` object. It will be the function that simulates the `mage` character's turn. This HOF will receive as a parameter the function that calculates the damage done by the `mage` character and will update the `healthPoints` of the `dragon` monster. In addition it must also update the value of the mage's `damage` and `mana` keys.

3. Create the third HOF that makes up the `gameActions` object. It will be the function that simulates the turn of the `dragon` monster. This HOF will receive as a parameter the function that calculates the damage done by the `dragon` monster and will update the `healthPoints` of the `mage` and `warrior` characters. In addition it must also update the value of the monster's `damage` key.

4. Add to the `gameActions` object a function that returns the updated `battleMembers` object and makes a `console.log` to visualize the final result of the turn.
