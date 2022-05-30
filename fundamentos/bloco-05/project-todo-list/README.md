# Welcome to the Task List project repository!

> ## [Live Version](https://lucasdximenes.github.io/other/projects/project-todo-list/)

Here you will find a project developed by [Lucas Ximenes](https://www.linkedin.com/in/lucasdximenes/) as a full-stack web development student at trybe.
The acquired knowledge was HTML, CSS, JavaScript and Programming Logic.

---

# Mandatory requirements

## 1 - Add to your list the title "My To-Do List" in a `<header>` tag

<details><summary><strong>Add a <code>header</code> tag with the content "My Task List"</strong></summary><br />

- Your page must have a `header` tag with the content "My Task List"

</details>

## 2 - Add below the title a paragraph with the text "Double-click an item to mark it as complete"

<details><summary><strong>Add a small, unobtrusive paragraph under the title with id="how" and the text "Double-click an item to mark it complete"</strong></summary> <br />

**What will be verified:**

- There is an element with the id `function`;
- Its content is `Double-click an item to mark it as complete`.

</details>

## 3 - Add an input where the user can type the name of the item they want to add to the list

<details><summary><strong>Add an input with the id="text-task" where the user can type the name of the item they want to add to the list</strong></summary><br />

**What will be verified:**

- There is an element of type `input`;
- Its id is `task-text`.

</details>

## 4 - Add an ordered list of tasks

<details><summary><strong>Add an ordered list of tasks with the id="to-do list"</strong></summary><br />

**What will be verified:**

- There is an element of type `ol`;
- Its id is `to-do list`.

</details>

## 5 - Add a button and when clicking this button a new item should be created at the end of the list and the input text should be cleared

<details><summary><strong>Add a button with id="create-task" and when clicking this button, a new item should be created at the end of the list and the input text should be cleared</strong>< /summary><br />

**What will be verified:**

- There is an element of type `button`;
- Its id is `create-task`;
- When typing the text `my first task` and clicking on the `create-task` button, the typed text appears in the list and **disappears from the input field**;
- Adding elements to the list will be done a few times, and it will be checked if all created items remain in the list as new ones are added.

</details>

## 6 - Sort to-do list items in order of creation

<details><summary><strong>You must ensure that items added to the list do not appear in a different order than they were created. For example, when adding the items `Do exercises in block 4`, `Second task` and `Write down JS hints`, they must appear in the list in exactly that order.</strong></summary><br />

**What will be verified:**

- Three items will be created in the list and it will be checked if they are sorted in order of creation - ie first the first item created, then the second, and so on.

</details>

## 7 - Clicking on a list item should change the item's background color to gray

<details><summary><strong>The color should be changed to the name of the color (gray) and not any other default color.</strong></summary><br />

**What will be verified:**

- When loading the page, the list items **do not have** the CSS style `background-color: gray`;

- When clicking on an item in the list, it changes to the CSS style `background-color: gray`.

</details>

## 8 - It must not be possible to select more than one element from the list at the same time

<details><summary><strong>It must not be possible to select more than one element from the list at the same time</strong></summary><br />

**What will be verified:**

- It will be verified that when an element of the list is selected, the previously selected element is no longer selected. This is verified by whether or not the `background-color: gray` style is present on the element.

</details>

## 9 - Double-clicking an item causes it to be crossed out, indicating that it has been completed. It should be possible to undo this action by double-clicking the item again

<details><summary><strong>Create a CSS class with the name "completed" and set the "text-decoration" property to the value "line-through". Use the "completed" CSS class to add the strikethrough effect to finished tasks.</strong></summary><br />

**What will be verified:**

- Before the action is triggered, the element added to the list has neither the `completed` class nor the `text-decoration: line-through solid black` style;

- By double clicking on the item in the list, it will have the class `completed` and the style `text-decoration` with the value `line-through solid black`;

- It will be verified that with a second double click, a complete element ceases to be one.

</details>

## 10 - Add a button that when clicked should delete all items in the list

<details><summary><strong>Add a button with id="delete-everything" which when clicked should delete all items in the list</strong></summary><br />

**What will be verified:**

- It will be verified that there is a `button` element with the id `delete-everything`;

- It will be verified that, since a list has tasks, a click on the button leaves it empty.

</details>

## 11 - Add a button that when clicked removes **only** the finished elements from your list

<details><summary><strong>Add a button with id="remove-finalized" that when clicked removes **only** the finalized elements from your list</strong></summary><br />

**What will be verified:**

- It will be verified that there is a `button` element with the id `remove-finished`;

- It will be verified that, by clicking the button, all elements marked as done are removed from the list.

</details>

---

# Bonus requirements

## 12 - Add a button that saves the contents of the list. If you close and reopen the page, the list should continue in the state it was in.

<details><summary><strong>Add a button with id="save-tasks" that saves the contents of the list. If you close and reopen the page, the list should continue as it was</strong></summary><br />

**What will be verified:**

- It will be verified that there is a `button` element with the id `save-task`;

- It will be verified that when the list has multiple elements, some of which are marked as finished, a reload of the page keeps the list exactly as it is.

</details>

## 13 - Add two buttons, which allow you to move the selected item up or down in the task list

<details><summary><strong>Add two buttons, one with id="move-up" and one with id="move-down", that allow you to move the selected item up or down in the task list</ strong></summary><br />

:warning: Important points about this bonus requirement: :warning:

- Before starting to develop this functionality, stop and think: </br>

What does it mean to move a list item up or down in **_DOM_**? :thinking: </br>

:bulb: You already have all the skills needed to do this :smiley:.

- Get used to thinking about special cases when building programs. What happens if the user tries to move the first item up or the last item down?

**What will be verified:**

- The existence of two `button` elements will be checked, one with the id `move-up` and the other with the id `move-down`;

- It will be verified that, since several elements have been added to the list, moving them in different ways leaves them in the expected positions;

- It will be verified that, if any element is finished, this status must persist even if the element is moved;

- It will be verified that, if no element is selected, clicking on the buttons does not change the list;

- It will be verified that an element that is selected must remain selected even after being moved;

- _Special case!_ It will be verified that, if you try to raise the element at the top of the list or, if you try to lower the last element of the list, this should not be changed.

</details>

## 14 - Add a button that, when clicked, removes the selected item

<details><summary><strong>Add a button with id="remove-selected" which, when clicked, removes the selected item</strong></summary><br />

**What will be verified:**

- It will check for the presence of a `button` element with a `remove-selected` id;

- It will be verified that, on clicking the button, only the selected element is removed.

</details>
