# 'Hello, world!' on React!

---

<details>

<summary>!! Before running</summary>

- First install the dependencies:

```
npm install
```

- Then run with:

```
npm start
```

</details>

---

## React Exercises

### [Exercise 1](./exercise_01/)

1. 🚀 Create a new project using `npx create-react-app name-app` and access the folder `name-app`

> Where `app-name` is the project name.

2. 🚀 Create a simple to-do list by following the steps below:

   - insert the following `Task` function above your `App` component inside the `App.js` file:

   ```
   const Task = (value) => {
    return(
      <li>{value}</li>
    );
   }
   ```

   - now call the function inside your `App` component (don't forget the JSX syntax!). Enter the value you want, save the page and start it by running the `npm start` command.

   - finally, create an array of appointments and use the `map` function so that each item in the array appears, as a list item, in your `App` component.

---

### [Exercise 2](./exercise_02/)

3. 🚀 Create a new project using npx create-react-app.

   - In the src folder, create a new file called `Header.jsx`, which will represent the Header component;

   - In the `Header.jsx` file, create a React class, called `Header`. This class should render an `h1` tag with the text 'Front End Contents'. Don't forget to export this component;

   - In the `App.js` file, import the `Header` component created earlier;

   - Render the `Header` component in `App.js`;

   - In the src folder, create a new file called `Content.jsx`, which will represent the `Content` component;

   - Inside the `Content.jsx` file, create a React class called `Content`;

   - Still in the `Content.jsx` file, add the following array:

   ```
   const contents = [
    {
      content: 'High Order Functions',
      block: 8,
      status: 'Learned'
    },
    {
      content: 'Component Composition',
      block: 11,
      status: 'Learning',
    },
    {
      content: 'Composition of States',
      block: 12,
      status: 'I will learn'
    },
    {
      content: 'Redux',
      block: 16,
      status: 'I will learn'
    },
   ];
   ```

   - The Content class must render the contents array using the map function, as seen before, with the following format:

   ```
   The content is: `Content Name`
   Status: `Content Status`
   Block: `Content Block`
   ```

   - Remember to add the 'key' attribute to the parent element of this list, in rendering.

   - Export the `Content` component;

   - In the `App.js` file, import the `Content` component created earlier;

   - Render the `Content` component in `App.js`;

   - Create a new `Footer.jsx` file;

   - In the `Footer.jsx` file, create a class called `Footer`.

   - The `Footer` class should render an `h1` tag with the text "And this is just the beginning...". Don't forget to export the created component.

   - Import the `Footer` component into `app.js`

   - Render the `Footer` component in `app.js`.

4. 🚀 **Bonus** Style the exercise application 3. To do this, add classes for styling your components so that each content listed is a Card.

   - To add a styling class to an HTML element, use the className attribute:

   ```
   <footer className='footer'>
    ...
   </footer>
   ```
