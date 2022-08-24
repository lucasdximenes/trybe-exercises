# Using Redux in React

---

## Before you start

- `npm install`

---

## [Exercise 1](./exercise_1/)

- In this exercise we have three buttons named Red, Yellow and Green. These buttons, when clicked, should pass a state to `Redux` with its name.

- This state will be used to turn on the traffic light corresponding to the color of the button clicked.

- In this exercise the whole store is ready, the only file to be changed is the file named `TrafficSignal.jsx`.

- Use **Redux** to store all application state

---

## [Exercise 2](./exercise_2/)

- In this exercise we have three cars with the colors Red, Blue and Yellow. Each of them has a button that, when clicked, passes a state to `Redux` with a boolean.

- This state will be used to change the CSS with the car image, so that it moves or not.

- In this exercise the whole store is ready, the only file to be changed is the file named `Cars.jsx`.

- Use **Redux** to store all application state.

---

This is a project for Block 15 content, about `Redux with react`.

---

## [Exercise 3](./exercise_3/)

> Note: While reducers are not created, the application will display an error in the browser.

- In this exercise we will use the codes from exercises 1 and 2. Here we will join (combine) the reducers from the first two exercises, so that they can be loaded together on the same application page.

- The operation of the two components **MUST** remain the same.

- In this exercise, the entire `store` is ready.

-You will need to create a file for each reducer from the previous exercises (exercise-one and exercise-two), and move the code of each of them to their respective files.

-Use the `redux/reducers/index.js` file to combine the two reducers.

-Change the `Cars.jsx` and `TrafficSignal.jsx` components to correctly receive the information from their respective reducers.

- Use **Redux** to store all application state.

---
