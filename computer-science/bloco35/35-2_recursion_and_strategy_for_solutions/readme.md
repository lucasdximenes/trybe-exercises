# Recursion and Strategy for Solutions

---

## Recursion

- A recursive function is a function that calls itself. An analogy for recursion is a person who is standing between two parallel mirrors, where the person's image is reflected recursively.

> **Note**: A recursive function must have a base case, which is the condition that stops the recursion. Without a base case, the function would run forever and would cause a **stack overflow** error.

```python
# Example of difference between recursion and iteration

def iterative_countdown(num):
    while num > 0:
        print(num)
        num -= 1
    print("Iterative countdown complete!")

def recursive_countdown(num):
    if num <= 0: # base case
        print("Recursive countdown complete!")
        return
    print(num) # recursive case
    num -= 1 # recursive case
    recursive_countdown(num) # recursive call

iterative_countdown(10)
recursive_countdown(10)
```

> Factorial example

```python
def factorial_recursive(n):
    if n == 1: # base case
        return 1
    return n * factorial_recursive(n - 1) # recursive case
```

---

## Call Stack

- The call stack is a stack data structure that stores information about the active subroutines of a computer program. This kind of stack is also known as an execution stack, program stack, control stack, run-time stack, or machine stack, and is often shortened to just "the stack".

> **Note**: The call stack is a data structure that uses the Last In, First Out (LIFO) principle to temporarily store and manage function invocation (call).

> Example with factorial function

```python
def factorial_recursive(n):
    if n == 1: # base case
        return 1
    return n * factorial_recursive(n - 1) # recursive case

factorial_recursive(5)
```

```shell
factorial_recursive(5)
5 * factorial_recursive(4) # First In
5 * (4 * factorial_recursive(3)) # Second In
5 * (4 * (3 * factorial_recursive(2))) # Third In
5 * (4 * (3 * (2 * factorial_recursive(1)))) # Fourth In
5 * (4 * (3 * (2 * 1))) # Fifth In
5 * (4 * (3 * 2)) # Fourth Out
5 * (4 * 6) # Third Out
5 * 24 # Second Out
120 # First Out
```

---

## Recursion tree

- The method of `recursion tree` can be used o estimate the cost of a recursive function. The cost of a recursive function is the amount of time and memory it takes to run. And depending on the cost, we may want to refactor the recursive function to instead use iteration.

> Master Theorem:
>
> - The master theorem is a formula for determining the asymptotic behavior of recursive sequences. It was published in 1980 by computer scientist Akra and Bazzi and has become a standard method for solving recurrence relations.

- To use `recursion tree` method, we draw a tree where each node represents a call to the recursive function. The root node represents the first call to the function, and the leaves represent the base cases. The cost of each node is the cost of the corresponding call.
- If each subproblem is `O(n)` and there are `a` subproblems, then the cost of the recursive function is `O(n^a)`. That means that the cost of the recursive function is exponential.
- If each subproblem we divide the problem /2, then the cost of the recursive function is `O(log n)`. That means that the cost of the recursive function is logarithmic.

---

## Strategy for Solutions

- Iterative:

  - Iterative solutions are composed of a series of steps that iterate through a sequence of elements.

- Recursive:

  - Recursive solutions are composed of a base case and a recursive case. The recursive case calls the function again, with a different input, and the base case returns a value without making any subsequent recursive calls.

- Brute Force:

  - Brute force solutions are composed of nested loops. The outer loop iterates through the entire input, and the inner loop iterates through the entire input again, comparing each element to the element in the outer loop.

- Divide and Conquer:
  - Divide and conquer solutions are composed of three steps: dividing the problem into subproblems, conquering subproblems by solving them recursively, and combining the solutions to the subproblems into the solution for the original problem.

---
