# Welcome to the Color guessing project repository

> ## [Live Version](https://lucasdximenes.github.io/other/projects/project-color-guess/)

It was a project carried out as a full-stack web student at Trybe. The acquired knowledge was HTML, CSS, JavaScript and Programming Logic.

---

# requirements

## 1 - Add a title to your site with the name of your game

<details>
  <summary>Your page must contain an html element with the id title</summary><br />

**What will be verified:**

- There is an element with **id** is `title`.

</details>

## 2 - Add a text with the RGB code to be guessed

<details>
  <summary>Your page should contain text with the color to be guessed in rgb format</summary><br />

**What will be verified:**

- If the text id is rgb-color;

- If the text contains the three numbers of the RGB colors to be guessed, in the following format: `(168, 34, 1)`.

</details>

## 3 - Add color options to the page to be guessed

<details>
  <summary>Your page should contain 6 circles which should contain the ball class</summary><br />

**What will be verified:**

- If there are 6 circles as a guessing color option;

- If the width and height of the circles are the same size;

- If all circles have the ball class.

</details>

## 4 - Add colors to the balls, they must be dynamically generated

<details>
  <summary>The colors of the circles are generated by javascript</summary><br />

**What will be verified:**

- The colors of each of the 6 colored circles must be generated via JavaScript when loading the page.

</details>

## 5 - When clicking on a colored circle, a text should be shown indicating if it is correct

<details>
  <summary>Your page should have text that should change depending on the game's situation</summary><br />

**What will be verified:**

- The **id** of the element with the response text must be `answer`;

- When the game starts, the text displayed should be `"Choose a color"`;

- If the colored circle is **correct**, the text "You got it right!" must be displayed;

- If the colored circle is **incorrect**, the text "Wrong! Try again!" should be displayed.

</details>

## 6 - Create a button to start/restart the game

<details>
  <summary>Your page should contain a button that allows you to start and play again</summary><br />

**What will be verified:**

- The button must have the reset-game id;

- When clicking on the button, new colors must be generated via JavaScript and the rgb-color element must be updated;

- When clicking on the button, the answer element should return to its initial state, displaying the text "Choose a color".

</details>

# bonus

## 7 - Create a score that increases 3 points for each hit in the game

<details>
  <summary>Your page should contain an element that should mark the player's score</summary><br />

**What will be verified:**

- The element must have the **id** `score`;

- Its initial value must be 0;

- With each hit, 3 points are added to the scoreboard;

- When clicking the reset button, the score must NOT be reset.

</details>
