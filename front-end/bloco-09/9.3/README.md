# exercise-magic-card

This is a project for content about `Async Jest`.

---

### Before starting

Run `npm install` in each respective folder in the exercise.

Tests will be performed using Jest `npm test`.

---

## [Exercise 1](./exercise_1/)

### Before you begin

- Confirm that you are on the `exercise-one` branch, if not, perform the steps described in the Readme before proceeding.
- All functions are already implemented, you will only have to worry about testing them.
- We are going to use `fetchSimulator` as a Javascript library, so don't worry about understanding the structure of this function, you will learn how to implement this type of function later in the course.
- Don't forget to update the number of `expect.assertions`, every `expect` you implement in your tests.

**Gold tip**: read and understand each part of the `getMagicCard` function implementation that is in the `src/magic.js` file. This will help you implement the tests.

**Another golden tip**: the `getMagicCard` function with the argument we are going to use during this exercise, "**130550**", will return the following object:

```javascript
{
  name: "Ancestor's Chosen",
  manaCost: "{5}{W}{W}",
  types: [ "Creature" ],
  subtypes: [ "Human", "Cleric" ],
  rarity: "Uncommon",
}
```

### Now hands on

1 - Complete the `async/await` syntax.
Open the file `tests/magic.test.js`, in it you will find the initial structure of the tests already assembled. This structure however is incomplete and needs tweaking to work properly.

2 - Implement a test that checks if the `name` property has a value of `Ancestor's Chosen`.

3 - Implement a test that checks if `getMagicCard` is a function.

4 - Implement a test that checks if, when calling the `getMagicCard` function with the argument "**130550**", the _fetch_ function was called.

5 - Implement a test that checks if, when calling the `getMagicCard` function with the argument "**130550**", the _fetch_ function was called with the endpoint "https://api.magicthegathering.io/v1/cards/ 130550".

6 - Implement a test that checks if the return of the `getMagicCard` function is equal to the `card` object.

**_spoiler-alert_**: you can unstructure the response object and get its properties directly.

7 - Implement a test that checks if, when calling the `getMagicCard` function with the `'idUnknown'` argument, it returns an error with the message: "Id is not found!".

**_Tip_**: To compare with the error object returned from the API, you can use the `new Error('expected message here')`.

**_Tip_**: In the `fetchSimulator` function, the `Promise.reject()` method is being used, which returns a promise that has not been resolved. To return an error when this happens, we use the `new Error('error message')` inside the `Promise.reject()`, which will create an error that the message will be what is written inside the parentheses. That's why you should test using `new Error()`.

---

## [Exercise 2](./exercise_2/)

### Before you begin

- Confirm that you are on the `exercise-two` branch, if not, perform the steps described in the Readme before proceeding.
- Inside the `data` folder, you will find the `favoriteCards` file, read and understand its structure to carry out the exercises.
- The `saveFavoriteMagicCard` function, in addition to calling the API, also modifies the `favoriteCards` file, adding a new card to each execution.
- Don't forget to update the number of `expect.assertions`, every `expect` you implement in your tests.

**Gold tip**: read and understand each part of the implementation of the `saveFavoriteMagicCard` function that is in the file `src/magic.js.` This will help you to implement the tests.

### Now hands on

We now have a file with some of our player's favorite cards. You can check its structure in the `data/favoriteCards.js` file. We will use this file for the next steps.

1 - Implement a test that verifies that after executing the `saveFavoriteMagicCard` function, `favoriteCards` has `length === 5`.

2 - Within the same it, implement a test that verifies that in the last position of the `favoriteCards` array there is a card with the property `name` and value "Beacon of Immortality".

3 - Still in the same it, call the `saveFavoriteMagicCard` function with the argument "**130554**" and check that `favoriteCards` becomes `length === 6`.

For the next exercises, uncomment the test within the scope of the second it.

4 - After uncommenting the test inside the second it, run the tests.

You will notice that the test failed. Can you understand why he fails? That's right, the `saveFavoriteMagicCard` function modified the `favoriteCards` file in the scope of the previous it. So, for Jest, the `favoriteCards` array does not have four cards, but six.

5 - Implement the `retrievesFavoriteCards` function with a logic capable of restoring the `favoriteCards` array, then call this function inside the `afterEach` method for the tests can pass.

## [Bonus](./exercise_2/)

- This exercise will be done in the same branch as the previous exercise: `exercise-two`.
- This exercise should be performed after implementing the `afterEach` function.
- Implement the requested test within the scope of the second `it`.

1 - Using the `map` function, create an array containing only the `name` property of all cards present in the original deck, that is, in `favoriteCards`. This array must contain four names and must be saved in a new variable.

2 - Implement a test that verifies that the array you obtained with the `map` from the previous exercise contains the following structure and values:

```js
["Ancestor's Chosen", "Angel of Mercy", "Aven Cloudchaser", "Ballista Squad"];
```

---
