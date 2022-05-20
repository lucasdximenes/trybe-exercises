# JavaScript - Working with elements

---

## Part I - Searching for elements

### [Exercise 1](./exercise_1/)

1. Access the `elementoWhereYouEsta` element.
2. Access `parent` from `ElementoWhereYouIsta` and add a `color` to it.
3. Go to `firstSonOfSon` and add some text to it. Do you remember the videos from the previous class, how to do this?
4. Access `firstChild` from `parent`.
5. Now access `firstChild` from `elementoWhereYouIsta`.
6. Now access the text `Attention!` from `elementoWhereYouIsta`.
7. Now access the `thirdChild` from `elementoWhereYouIsta`.
8. Now access `thirdChild` from `parent`.

---

## Part II - Creating elements

### [Exercise 1](./exercise_2/)

1. Create a sibling for `elementWhereYouIsta`.
2. Create a child for `elementWhereYouIsta`.
3. Create a child for `firstChildOfChild`.
4. From this created child, access `thirdChild`.

---

## Part III - Removing elements

### [Exercise 1](./exercise_3/)

-   Remove all child elements of `parentOfParent` except `parent`, `WhereYouIsElement` and `firstChildOfChild`.

---

## 🚀 Now the practice

### [Part 1](./exercise_4/)

1. 🚀 Add the `h1` tag with the text `Exercise 5.2 - JavaScript DOM` as a child of the `body` tag;
2. 🚀 Add the `main` tag with the `main-content` class as a child of the `body` tag;
3. 🚀 Add the `section` tag with the `center-content` class as a child of the `main` tag created in step 2;
4. 🚀 Add the `p` tag as a child of the `section` created in step 3 and put some text;
5. 🚀 Add the `section` tag with the `left-content` class as a child of the `main` tag created in step 2;
6. 🚀 Add the `section` tag with the `right-content` class as a child of the `main` tag created in step 2;
7. 🚀 Add an image with `src` set to the value `https://picsum.photos/200` and class `small-image`. This element must be a child of the `section` created in step 5;
8. 🚀 Add an unordered list with the values ​​from 1 to 10 spelled out, ie `one`, `two`, `three`, ... as list values. This list must be a child of the `section` created in step 6;
9. 🚀 Add 3 `h3` tags, all children of the `main` created in step 2.

### [Part 2](./exercise_5/)

1. 🚀 Add the `title` class to the created `h1` tag;
2. 🚀 Add the `description` class to the 3 created `h3` tags;
3. 🚀 Remove the `section` created in step 5 (the one with the `left-content` class). Use the `.removeChild()` function;
4. 🚀 Center the `section` created in step 6 (the one with the `right-content` class). Tip: to center, just set the `margin-right: auto` of the `section`;
5. 🚀 Change the background color of the parent element of the `section` created in step 3 (the one with the `center-content` class) to green;
6. 🚀 Remove the last two elements (`nine` and `ten`) from the list created in step 8.
