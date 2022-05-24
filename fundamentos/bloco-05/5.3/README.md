# JavaScript - Events

---

## Part II - Meet addEventListener:

### [Exercise 1](./exercise_1/)

1. Copy this file and edit it only;

- 1.1. Before starting the exercises, use the LiveServer to take a look at what the page looks like in the browser.
- 1.2. Note that one of the boxes is slightly above the others. Why does this occur?

2. Create a function that adds the 'tech' class to the `li` element when it is clicked.

- 2.1. There must be only one element with class 'tech'. How you do it?

3. Create a function that, when typing in the text box, changes the text of the element with the class 'tech';

4. Create a function that, when double-clicking on 'My top 3 from Spotrybefy', it redirects to some page;

- 4.1. How about redirecting to your portfolio?

5. Create a function that, when hovering over 'My top 3 on Spotrybefy', changes its color;

---

## 🚀 Tryber Calendar

### [Exercise](./exercise_2/)

#### 🚀 Requirement 1:

1. The `dezDaysList` array contains the last two days of November and the days of the month of December. Develop a function that dynamically creates each calendar day and adds them as children of the `<ul>` tag with ID `"days"`. Note that the 29th and 30th of November are in the array as they represent Sunday and Monday respectively.
   - The days must be contained in a `<li>` tag, and all must have the day class. Ex: `<li class="day">3</li>`
   - The 24th, 25th and 31st are holidays and, in addition to the `day` class, they must also contain the `holiday` class. Ex: `<li class="day holiday">24</li>`
   - The 4th, 11th, 18th and 25th are Friday. They must contain the `day` class and the `friday` class. Ex: `<li class="day friday">4</li>`

`const tenDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21 , 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

#### 🚀 Requirement 2:

2. Implement a function that receives the string "Holidays" as a parameter and dynamically creates a button with the name "Holidays".
   - Add to this button the ID `"btn-holiday"`.
   - Add this button as child of tag `<div>` with class `"buttons-container"`.

#### 🚀 Requirement 3:

3. Implement a function that adds to the "Holidays" button a "click" event that changes the background color of the days that have the `"holiday"` class.
   - It is interesting that this button also has the inverse logic. When clicked again it returns to the initial configuration with the color `"rgb(238,238,238)"`.

#### 🚀 Requirement 4:

4. Implement a function that receives the string "Friday" as a parameter and dynamically creates a button with the name "Friday".
   - Add to this button the ID `"btn-friday"`.
   - Add this button as child of tag `<div>` with class `"buttons-container"`.

#### 🚀 Requirement 5:

5. Implement a function that adds to the "Friday" button a "click" event that modifies the text displayed on days that are Friday.
   - It is interesting that this button also has the inverse logic. When clicked again it returns to the initial configuration displaying the days.

#### 🚀 Requirement 6:

6. Implement two functions that create a "zoom" effect. When hovering the mouse pointer on a day of the month in the calendar, the text for that day should enlarge, and when the mouse pointer leaves the day, the text should return to its original size.
   - Tip - Property: `event.target`.

#### 🚀 Requirement 7:

7. Implement a function that adds a custom task to the calendar. The function must receive as a parameter the string with the name of the task (eg "cook") and dynamically create an element with the `<span>` tag containing the task.
   - The created element must be added as a child of the `<div>` tag that has the `"my-tasks"` class.

#### 🚀 Requirement 8:

8. Implement a function that adds a colored caption to the task created in the previous exercise. This function should take a string ("color") as a parameter and dynamically create a `<div>` tag element with the `task` class.
   - The color parameter should be used as the background color of the created `<div>`.
   - The created element must be added as a child of the `<div>` tag that has the `"my-tasks"` class.

#### 🚀 Requirement 9:

9. Implement a function that adds an event that, when clicking on the element with the `<div>` tag referring to the color of your task, assigns to this element the class `task selected`, that is, when your task has the class `task selected`, it will be selected.
   - When clicking on the element again, its class should go back to being just `task`, that is, this task is no longer a selected task.

#### 🚀 Requirement 10:

10. Implement a function that adds an event that, when clicking on a day of the month in the calendar, assigns this day the color of the caption of your selected task.
    - When clicking again on the day with the legend color, its color should return to the initial `rgb(119,119,119)`.

#### 🚀 Bonus:

11. Shall we add appointments to your calendar? Implement a function that and when typing an appointment in the "APPROVALS" text box, add the item to the "MY APPOINTMENTS" list by clicking the "ADD" button.
    - If no characters are entered in the `input` field, the function should return an `alert` with an error message when clicking "ADD".
    - When pressing the "enter" key the event must also be triggered.
    - Tip - Property: `key`.
