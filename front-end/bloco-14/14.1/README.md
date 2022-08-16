# RTL - Getting Started

---

- After the clone of the repository, the user must execute the command in the respective folder of each project:

```bash
npm install
```

---

## [Exercise 1 - to-do list](./exercise-todo-list/)

1. Implement the tests:

   - Need a button to add the task.
   - Button must contain the text "Add".
   - When clicking, the task typed by the user needs to be saved.

2. Test the application. Pay attention to what the test guides:

   - Use the array already provided in the code to perform the tests. Each array element will be a task. Simulate adding them all and then check if they are showing.
   - Test only the Item component. When passing a string to him it needs to appear on the screen.

3. Differently from the others, the tests are already ready, being necessary to create only the functionalities that they test.

   - Each task added should have a button next to it with the text "Select"
   - Each task added should have another button next to it with the text "Remove", this button should be disabled
   - When clicking on the "Select" button of a task, it should enable its "Remove" button
   - By clicking on the "Remove" button the task should be removed from the screen
   - Observe well how the tests are written, all must pass when the functionality is finished.

---

## [Exercise 2 - tic-tac-toe](./exercise-tic-tac-toe/)

1. Write the tests for the initial game settings:

   - Empty fields;
   - No End of Game message;
   - 9 Rendered Houses.

2. Now, in addition to performing some tests, it will be necessary to implement some functionalities. The TicTacToe.js file has some information on how the game should work.

   - Two players play the game;
   - With each click on a house the player must be changed;
   - Each player must have a tag (the images that are in the repository, x.png, o.svg);
   - By clicking on the chosen house, the house must be modified to have the player's marking, X or O;
   - When clicking on an already marked box, nothing should happen;
   - Marked squares cannot be modified;

Test the behavior of each house, some examples:

    - The symbol changes when you click on one and then on the other, showing the player's change;
    - House cannot be changed after being clicked on by a player;

3. Now you will do the functionality according to the test already created for it. The functionality must be created in the TicTacToe.js file. Much of it is already created; pay attention to past instructions.

We need to know when the game ends! The tests have already been implemented, but if you run them you will see that none of them passes. This functionality is not yet ready and needs to be created.

Create the application by observing the tests, they will guide you.

Bonus - Our tests do not cover the case of a tie or who was the winner.

    - Create a message to see who is the winner or when there is a tie.
    - Create the tests for this new functionality.
    - Add a button to restart the game. Create the tests for it.
