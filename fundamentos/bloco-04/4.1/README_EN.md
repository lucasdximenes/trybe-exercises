# 4.1 Exercises:

---

## Variables

### [Exercise 1](./exercise_1/script.js)

1. Create a constant called myName and give it its name (Example: Carolina).
2. Create a constant called birthCity and assign it her hometown.
3. Create a variable called birthYear and assign it the year you were born.
4. Use console.log() to print the constants and variables you created.
5. Change the value assigned to the birthYear variable to 2030. Do a console.log(birthYear) again to see what happens!
6. Change the value assigned to the birthCity constant. Do a console.log(birthCity) again! Could you explain why we get an error message? 🤔

---

## Primitive Types, Dynamic Typing and Arithmetic Operations

### [Exercise 2](./exercise_2/script.js)

1. Create a constant called base and a variable called height and assign their respective values: 5 and 8.
2. Create a constant called area and assign it the result of multiplying the base by the height. Tip: remember to always use console.log() to print variables and check the results of operations!
3. Create a constant called perimeter and assign it the sum of all sides of the rectangle.

---

## If and Else conditions

### [Exercise 3](./exercise_3/script.js)

1. Create a constant that receives the grade of a candidate in a technical challenge, and assigns it a value between 1 and 100;
2. Implement logic that checks whether the candidate passed, failed, or is on the waitlist. To do this, consider the following information:
    - If the grade is greater than or equal to 80, print "Congratulations, you were approved!"
    - If the grade is less than 80 and greater than or equal to 60, print "You are on our waiting list"
    - If the grade is less than 60, print "You failed"
3. Create a conditional structure using the if, else if and else to create your algorithm, and the logical operators that apply to each situation.
4. Change the grade value to verify that the conditions you implemented work;

---

## Logical Operators

### [Exercise 4](./exercise_4/script.js)

> AND operator:

1. Create a constant called "currentHour" that takes a number between 4 and 24 of your choice, to represent the hours of the day.
2. Create a variable called "message" which is initially an empty string.
3. Implement conditionals so that:
    - If the time is greater than or equal to 22, enter "We shouldn't eat anything, it's bedtime" in the "message" variable.
    - If the time is greater than or equal to 18 and less than 22, insert "Rango da noite, let's have dinner :D" in the variable "message".
    - If the time is greater than or equal to 2 pm and less than 6 pm, enter "Shall we make a cake for breakfast?" in the "message" variable.
    - If the time is between 11 am and 2 pm, enter "Lunch time!!!" in the "message" variable.
    - If the time is between 4 and 11, enter "Hmmm, smell of freshly brewed coffee" in the "message" variable.
4. Now print the message variable outside of its conditions.

### [Exercise 5](./exercise_5/script.js)

> OR operator:

1. Create a variable called "weekDay" that receives the string "Wednesday".
2. Implement conditionals so that:
    - If our "weekDay" variable is "Monday", "Tuesday", "Wednesday", "Thursday" or "Friday", print "Oba, another day of learning at Trybe > :D".
    - If it's a weekend day, print "FINALLY, well-earned rest UwU".

---

## Switch and Case

### [Exercise 6](./exercise_6/script.js)

1. Create a variable to store the status of the candidate in the selection process, which can be: 'approved', 'list' or 'disapproved';
2. Create a conditional structure with the switch/case that will print the messages from the previous exercise if the candidate's status is 'passed', 'listed' or 'failed'. By default, print the 'not applicable' message.

---

## JavaScript - Getting Started

### [Exercise 7](./exercise_7/script.js)

1. Make five programs, one for each basic arithmetic operation. Your program must have two constants, a and b, defined at the beginning with the values ​​that will be operated on. Make programs for:
    - Addition (a + b)
    - Subtraction (a - b)
    - Multiplication (a \* b)
    - Division (a / b)
    - Module (a % b)

### [Exercise 8](./exercise_8/script.js)

2. Write a program that returns the greater of two numbers. At the beginning of the program, define two constants with the values ​​to be compared.

### [Exercise 9](./exercise_9/script.js)

3. Write a program that returns the largest of three numbers. Define at the beginning of the program three constants with the values ​​to be compared.

### [Exercise 10](./exercise_10/script.js)

4. Write a program that, given a value defined in a constant, returns "positive" if that value is positive, "negative" if it is negative, and "zero" otherwise.

### [Exercise 11](./exercise_11/script.js)

5. Write a program that defines three constants with the values ​​of the three interns angles of a triangle. Return true if the angles represent the angles of a triangle and false otherwise. If any angle is invalid, the program should return an error message.

-   For the angles to be a valid triangle, the sum of the three must be 180 degrees.
-   An angle will be considered invalid if it does not have a positive value.

### [Exercise 12](./exercise_12/script.js)

6. Write a program that takes the name of a chess piece and returns the moves it makes.

-   As a challenge, make the program work both if it receives the name of a part with capital letters or with lowercase letters, without increasing the number of conditionals.
-   As a hint, you can search for a function that makes a string all lower case (lower case).
-   If the passed part is invalid, the program must return an error message.
-   Example: bishop (bishop) -> diagonals (diagonals)

### [Exercise 13](./exercise_13/script.js)

7. Write a program that converts a grade given in percentage (from 0 to 100) into grades A through F. Follow these rules:

-   Percentage >= 90 -> A
-   Percentage >= 80 -> B
-   Percentage >= 70 -> C
-   Percentage >= 60 -> D
-   Percentage >= 50 -> E
-   Percentage < 50 -> F
-   The program should return an error message and terminate if the grade passed is less than 0 or greater than 100.

### [Exercise 14](./exercise_14/script.js)

8. Write a program that defines three numbers in constants and returns true if at least one of the three is even. Otherwise, it returns false.

-   Bonus: use only one if.

### [Exercise 15](./exercise_15/script.js)

9. Write a program that defines three numbers in constants and returns true if at least one of the three is odd. Otherwise, it returns false.

-   Bonus: use only one if.

### [Exercise 16](./exercise_16/script.js)

10. Write a program that starts with two values ​​in two different constants: the cost of a product and its sales value. From the values, calculate how much profit (sales value minus the cost of the product) the company will have when selling one thousand of these products.

-   Please note that the cost of the product is subject to a tax of 20%.
-   Your program should also issue an error message and terminate if any of your input values ​​are less than zero.
-   The profit of a product is the result of subtracting the sale value by the cost of the same, and the 20% tax is also part of the cost value.
    -TotalCostValue = CostValue + TaxOnCost
    -   profit = salesAmount -TotalCostValue (profit from a product)

### [Exercise 17](./exercise_17/script.js)

11. A person who works with a formal contract in Brazil has the INSS and IR deducted from his gross salary. Write a program that, given a gross salary, calculates the net amount to be received.

-   The notation for a salary of R$1500.10, for example, should be 1500.10. For tax bands, use the following references:
    -   INSS (National Social Security Institute)
        -   Gross salary up to BRL 1,556.94: 8% rate
        -   Gross salary from BRL 1,556.95 to BRL 2,594.92: 9% rate
        -   Gross salary from BRL 2,594.93 to BRL 5,189.82: rate of 11%
        -   Gross salary above BRL 5,189.82: maximum rate of BRL 570.88
    -   IR (Income Tax)
        -   Up to BRL 1,903.98: exempt from income tax
        -   From BRL 1,903.99 to BRL 2,826.65: rate of 7.5% and installment of BRL 142.80 to be deducted from tax
        -   From BRL 2,826.66 to BRL 3,751.05: rate of 15% and installment of BRL 354.80 to be deducted from tax
        -   From BRL 3,751.06 to BRL 4,664.68: rate of 22.5% and installment of BRL 636.13 to be deducted from tax
        -   Above R$ 4,664.68: rate of 27.5% and installment of R$ 869.36 to be deducted from the tax.
