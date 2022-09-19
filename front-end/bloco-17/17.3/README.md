# React Hooks - useEffect and custom Hooks

---

## installation instructions

1. Clone the repository
2. Install dependencies with `npm install`
3. Start the development server with `npm start`
4. Access `http://localhost:3000` in your browser

---

### [Exercise 1](./exercise_1/)

> In this exercise we will develop an application that renders an email list. The application must allow it to be possible to mark an email as read or unread. When all the emails in the list are read, an alert should be displayed informing you that all messages have been read!

- To perform this exercise you must:

  - use only functional components;
  - manage application state using the setState hook;
  - your application must save a list of received emails in the state;
  - each email received must have the following structure:

    ```js
    {
      id: 1,
      title: 'Email 1',
      status: 0
    }
    ```

  - use status: 0 for unread emails and status: 1 for read emails;
  - each email in the list must be rendered together with two buttons, one to mark the email as read and another to mark it as unread;
  - in addition to the mailing list, there should also be two control buttons: one to mark all emails as read and another to mark all emails as unread;
  - use the useEffect hook to “monitor” the changes that happen in the email list saved in the state;
  - whenever all emails on the list are marked as “read”, display an alert with the message “Congratulations! You read all your messages!”.

---

### [Exercise 2](./exercise_2/)

> Create a new React application that has a useTimer() custom hook. This hook needs to have three functionalities:

1. It should return a timer that goes from 1 to 10, which is incremented by 1 every second. When the value reaches 10, the timer must return to the value 1 and restart the count.

2. It must return a random number between 1 and 100. Whenever the timer returns to the value 1, a new random number must be rendered.

3. Whenever the random number being rendered is a number divisible by 3 or 5, the word Bingo must be rendered. This word must remain for only 4 seconds.

---
