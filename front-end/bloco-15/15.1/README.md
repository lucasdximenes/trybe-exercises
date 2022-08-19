# Introduction to Redux - The global state of the application

---

## [Exercise 1](./exercise_1/index.html)

> Let's build a state managed by Redux and make some modifications to it. Our objective will be to manipulate the color of a container through Redux.

<details>
<summary>The initial code will be available below:</summary>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.min.js"></script>
    <style>
      body {
        height: 100vh;
        margin: 0;
        padding: 0;
      }

      #container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      button {
        height: 50px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="container">
      <p>Color: <span id="value">white</span></p>
      <button id="previous">Previous color</button>
      <button id="next">Next color</button>
    </div>
    <script>
      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
    </script>
  </body>
</html>
```

</details>

1. Create a store for our application.

2. Create a reducer, implementing a `switch` returning only the initial state as `default`. Don't forget to put the reducer as a parameter to the `createStore`, done in the previous step.

3. Increment the `switch` created in the previous exercise with the `NEXT_COLOR` and `PREVIOUS_COLOR` cases. These actions must change the `index` value stored in `INITIAL_STATE`. Pay attention to the size limits of the array, positions must start at 0 and cannot exceed the number of the last item in the array.

4. Create `eventListeners` that listen for the clicks of each button, the **Previous color** and the **Next color**, and perform a `dispatch` with the respective `actions`.

5. `Subscribe` to the store, changing the `innerHTML` of the tag with id `value` to the current color and style of the element with id `container`. You should be able to see the colors changing in the background, and the color name displayed.

6. Create a button with the text **Random color**, an `eventListener` and an `action` in the `reducer` adding a random color to the `colors` array stored in our initial state. Also make this color show when it is created by changing the `index` state to its position.

<details>
<summary>To make it easier, here's a function that generates random colors:</summary>

```
function criarCor() {
    const oneChar = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let cor = '#';
    const aleatorio = () => Math.floor(Math.random() * oneChar.length);
    for (let i = 0; i < 6; i += 1) {
        cor += oneChar[aleatorio()];
    }
    return cor;
}
```

</details>

> Randomly created colors must be stored in the array. In this way, with the **Next color** and **Previous color** buttons, we will be able to move between standard and random colors. Use the `spread operator` to add each random color.

---

## [Exercise 2](./exercise_2/index.html)

> Let's make an application that combines two reducers: one for the theme (light mode and dark mode) and another for the user's status (online and offline). One button should change the theme and another button should change the status.

<details>
<summary>The initial code is available below:</summary>

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>App Trybe</title>
    <script src="https://unpkg.com/redux@latest/dist/redux.js"></script>
    <style>
      body {
        color: white;
        background-color: #333;
        font-family: sans-serif;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Minha Aplicação</h1>
      <p>Status: Você está <span id="status">Offline</span></p>
      <button id="toggle-theme">Light Mode</button>
      <button id="toggle-status">Ficar Online</button>
    </div>
    <script>
      const THEME_INITIAL_STATE = {
        theme: 'dark',
      };

      const themeReducer = (state = THEME_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const STATUS_INITIAL_STATE = {
        status: 'offline',
      };

      const statusReducer = (state = STATUS_INITIAL_STATE, action) => {
        switch (action.type) {
          default:
            return state;
        }
      };

      const themeButton = document.getElementById('toggle-theme');
      const statusButton = document.getElementById('toggle-status');

      themeButton.addEventListener('click', () => {
        // coloque o código aqui.
      });

      statusButton.addEventListener('click', () => {
        // coloque o código aqui.
      });
    </script>
  </body>
</html>
```

</details>

1. Combine existing reducers with the `combineReducers` function and save it to a constant.

2. Create a store with the combination of reducers.

3. Add a `case` inside the `switch` of each of the reducers to change the `theme` and `status` states. The purpose of `themeReducer` is to switch the `theme` between 'light' and 'dark'. The purpose of `statusReducer` is to switch `status` between 'offline' and 'online'.

4. Dispatch each of the actions by clicking on the respective buttons.

5. Add a `store.subscribe()` to update the following information on the page:

   - If the theme is `light`, the `body` must have a dark background color and a light font.

   - If the theme is `dark`, it must have a light background color and dark font.

   - If the status is `online`, the `#status` must have the text `Online`. If the status is `offline`, the `#status` must have the text `Offline`.

   - Also don't forget to modify the text of the buttons to reflect exactly what they do.

---
