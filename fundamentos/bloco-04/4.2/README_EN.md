# 4.2: JavaScript - Array and For Loop | Exercises:

---

## Arrays (lists)

### [Exercise 1](./exercise_1/script.js)

-   Get the "Services" value from the menu array:

### [Exercise 2](./exercise_2/script.js)

-   Look for the index of the "Portfolio" value of the menu array:

### [Exercise 3](./exercise_3/script.js)

-   Add the value "Contact" at the end of the menu array:

---

## For

### [Exercise 4](./exercise_4/script.js)

-   Use for to print the elements of the groceryList list with console.log():

---

## For/off

### [Exercise 5](./exercise_5/script.js)

-   Use for/of to print the elements of the names list with console.log():

---

## JavaScript - Array and For loop

-   We will use this array to perform exercises 6 to 12:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercise 6](./exercise_6/script.js)

-   In this first exercise, go through the array printing all the values ​​contained in it with the console.log() function;

### [Exercise 7](./exercise_7/script.js)

-   For the second exercise, add all the values ​​contained in the array and print the result;

### [Exercise 8](./exercise_8/script.js)

-   For the third exercise, calculate and print the arithmetic mean of the values ​​contained in the array;

### [Exercise 9](./exercise_9/script.js)

-   With the same code as in the previous exercise, if the final value is greater than 20, print the message: "value greater than 20". If not, print the message: "value less than or equal to 20";

### [Exercise 10](./exercise_10/script.js)

-   Using for, find the largest value contained in the array and print it;

### [Exercise 11](./exercise_11/script.js)

-   Find out how many odd values ​​there are in the array and print the result. If there is none, print the message: "no odd value found";

### [Exercise 12](./exercise_12/script.js)

-   Using for, find the smallest value contained in the array and print it;

### [Exercise 13](./exercise_13/script.js)

-   Using for, create an array that goes from 1 to 25 and print the result;

### [Exercise 14](./exercise_14/script.js)

-   Using the array created in the previous exercise, print the result of dividing each of the elements by 2.

---

## Bonus:

-   For the next two exercises [read this article](http://devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/) and try to understand what is happening in the code below:

```
for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let position = array[index];
      array[index] = array[secondIndex];
      array[secondIndex] = position;
    }
  }
}
```

-   Based on your reading, consider the numbers array below and do the exercises:

```
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
```

### [Exercise 15](./exercise_15/script.js)

-   Sort the numbers array in ascending order and print their values;

### [Exercise 16](./exercise_16/script.js)

-   Sort the numbers array in descending order and print their values;

### [Exercise 17](./exercise_17/script.js)

-   Now create a new array from the numbers array, without losing it. Each value in the new array must equal the corresponding value in the numbers array multiplied by the next. For example: the first value of the new array should be 45, as it is the multiplication of 5 (first value) and 9 (next value). The second value of the new array should be 27, as it is the multiplication of 9 (second value) and 3 (next value), and so on. If there is no next value, the multiplication must be done by 2. Do this using the for and push method. The result should be the array below:

```
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]
```
