# Introduction - Complexity of Algorithms

---

Complexity of Algorithms is a way to measure how much time and memory an algorithm needs to run.

The complexity of an algorithm is measured in terms of:

- **Time Complexity**: How much time an algorithm needs to run.
- **Space Complexity**: How much memory an algorithm needs to run.

---

## Time Complexity

The time complexity of an algorithm is the amount of time it needs to run. It is measured in terms of the number of operations performed by the algorithm. The time complexity of an algorithm is commonly expressed using the big O notation.

`O` notation is a relative representation of the complexity of an algorithm. It shows how the algorithm will respond to changes in the input size. It gives a worst-case scenario for the performance of an algorithm.

and `(n)` is the size of the input. The complexity of an algorithm can be constant, logarithmic, linear, quadratic, cubic, polynomial, exponential, or factorial. Basically, the complexity of an algorithm is a mathematical function that gives you the number of operations that an algorithm needs to perform based on the size of the input.

> Example:
>
> ```python
> def sum(n):
>     sum = 0
>     for i in range(n):
>         sum += i
>     return sum
> ```
>
> The function above has a time complexity of `O(n)`, because the number of operations is directly proportional to the size of the input.

---

## Space Complexity

The space complexity of an algorithm is the amount of memory it needs to run. It is measured in terms of the number of memory units required by the algorithm. The space complexity of an algorithm is commonly expressed using the big O notation.

> Example:
>
> ```python
> def sum(n):
>     sum = 0
>     for i in range(n):
>         sum += i
>     return sum
> ```
>
> The function above has a space complexity of `O(1)`, because the number of memory units required by the algorithm is constant, regardless of the size of the input.

> Example Two:
>
> ```python
> def multiply_array(n):
>     array = []
>     for i in range(n):
>         array.append(i * i)
>     return array
> ```
>
> The function above has a space complexity of `O(n)`, because the number of memory units required by the algorithm is directly proportional to the size of the input.

---

### Quadratic Complexity: `O(n²)`:

- The number of operations is proportional to the square of the size of the input.

> Example:
>
> ```python
> def multiply_arrays(array1, array2):
>     result = []
>     for i in array1:
>         for j in array2:
>             result.append(i * j)
>     return result
> ```
>
> If we use the function with `my_array = [1, 2, 3]`, the number of operations will be `3² = 9`. Debugging the function with that input, we can see that the number of operations is indeed 9.:
>
> ```sh
> >>> multiply_arrays([1, 2, 3], [1, 2, 3])
> 1 * 1 = 1
> 1 * 2 = 2
> 1 * 3 = 3
> 2 * 1 = 2
> 2 * 2 = 4
> 2 * 3 = 6
> 3 * 1 = 3
> 3 * 2 = 6
> 3 * 3 = 9
> [1, 2, 3, 2, 4, 6, 3, 6, 9] #
> ```
>
> And space complexity is `O(n²)`, because the number of memory units required by the algorithm is directly proportional to the square of the size of the input.

If we use another `for` loop, the number of operations will be `3³ = 27`. And space complexity is `O(n³)` (cubic complexity).

---

## Comparing order of complexity

| Order of complexity | Name      | description                                                                      |
| ------------------- | --------- | -------------------------------------------------------------------------------- |
| `O(1)`              | Constant  | The number of operations is constant, regardless of the size of the input.       |
| `O(n)`              | Linear    | The number of operations is directly proportional to the size of the input.      |
| `O(n²)`             | Quadratic | The number of operations is proportional to the square of the size of the input. |
| `O(n³)`             | Cubic     | The number of operations is proportional to the cube of the size of the input.   |

---

### Logarithmic Complexity: `O(log n)`:

- The number of operations is proportional to the logarithm of the size of the input. The base of the logarithm is usually 2, but it can be any number.
- For example, if `n` is 8, the base-2 logarithm of `n` is 3, because 2³ = 8. If `n` is 16, the base-2 logarithm of `n` is 4, because 2⁴ = 16.
- Logarithmic has a inverse relationship with exponential, the bigger the input, the less operations the algorithm needs to perform.
- Logarithmic complexity is commonly found in algorithms that divide the input in half every time, such as binary search.

> Binary Search:

```python
def binary_search(array, target):
  """
  Binary search algorithm is a search algorithm that finds the position of a target value within a sorted array.
  """
    low = 0
    high = len(array) - 1
    while low <= high:
        mid = (low + high) // 2 # // is the floor division operator
        """
        The algorithm starts by comparing the target value to the value of the middle element of the array.
        """
        if array[mid] == target:
            return mid
        """
        If the target value is equal to the value of the middle element, the position is returned.
        """
        elif array[mid] < target:
            low = mid + 1
        """
        If the target value is greater than the value of the middle element, the algorithm repeats its action on the sub-array to the right of the middle element.
        """
        else:
            high = mid - 1
        """
        If the target value is less than the value of the middle element, the algorithm repeats its action on the sub-array to the left of the middle element.
        """
    return None
```

- `O(n * log n)` is a common time complexity for algorithms that sort an array using a divide and conquer strategy. For example, if in a function we use a `for` loop with a `binary_search` function, the time complexity will be `O(n * log n)`.
  > Example:
  >
  > ```python
  > def do_something(array1, array2):
  >     for i in array1: # O(n)
  >         binary_search(array2, i) # O(log n)
  > ```

---

### Exponential and Factorial Complexity: `O(2ⁿ)` and `O(n!)`:

- The number of operations is proportional to 2 raised to the power of the size of the input.
- The algorithms with exponential complexity are very inefficient, because the number of operations grows very fast as the size of the input increases. For example, if the size of the input is 10, the number of operations will be 2¹⁰ = 1024. If the size of the input is 20, the number of operations will be 2²⁰ = 1048576.
- The algorithms with factorial complexity are even more inefficient, because the number of operations grows even faster as the size of the input increases. For example, if the size of the input is 10, the number of operations will be 10! = 3628800. If the size of the input is 20, the number of operations will be 20! = 2432902008176640000.
- But theses algorithms are very rare, because they are very inefficient. And they exists because not all problems have efficient solutions. For example, the traveling salesman problem is a problem that has no efficient solution, and we can only solve it with an algorithm with factorial complexity.

> - Traveling Salesman Problem:

- The traveling salesman problem is a problem that asks the following question: Given a list of cities and the distances between each pair of cities, what is the shortest possible route that visits each city exactly once and returns to the origin city?
- It is a `brute force` algorithm, because it tries every possible solution to find the best one. The time complexity of the algorithm is `O(n!)`, because the number of operations is proportional to `n!`, where `n` is the number of cities.

> example:

- We have 4 cities: A, B, C, D.
- The number of possible routes is 4! = 24.

```sh
A -> B -> C -> D
A -> B -> D -> C
A -> C -> B -> D
A -> C -> D -> B
A -> D -> B -> C
A -> D -> C -> B
B -> A -> C -> D
B -> A -> D -> C
B -> C -> A -> D
B -> C -> D -> A
B -> D -> A -> C
B -> D -> C -> A
C -> A -> B -> D
C -> A -> D -> B
C -> B -> A -> D
C -> B -> D -> A
C -> D -> A -> B
C -> D -> B -> A
D -> A -> B -> C
D -> A -> C -> B
D -> B -> A -> C
D -> B -> C -> A
D -> C -> A -> B
D -> C -> B -> A
```

The algorithm tries every possible route to find the shortest one.

Algorithms that have no known solution in polynomial time, that is, algorithms that have exponential or factorial complexity, are called `NP-hard` problems. And are possible to solve them with `brute force` algorithms.

---

## Examples:

```python
def calculations(n):
    number1 = 0
    for n1 in range(n):
        number1 += n1

    number2 = 0
    for n1 in range(n):
       for n2 in range(n):
            number2 += n1 + n2

    number3 = 0
    for n1 in range(n):
       for n2 in range(n):
           for n3 in range(n):
               number3 += n1 + n2 + n3

    return number1, number2, number3

n1, n2, n3 = calculations(100)
print(f'{n1}, {n2}, {n3}')
```

This algorithm has a `O(n + n² + n³)` time complexity, but we can simplify it to `O(n³)`, because the term with the highest exponent is the most significant.

> If we have parallel `for` loops, we sum the time complexity of each `for` loop. and if we have nested `for` loops, we multiply the time complexity of each `for` loop.

If an algorithm has a time complexity of `O(n! + log(n))`, we can simplify it to `O(n!)`, because the term with the highest exponent is the most significant.

---

## Best case, worst case and average case:

- The time complexity of an algorithm is not always the same, it depends on the input.
- The best case is the input that makes the algorithm perform the fewest operations.
- The worst case is the input that makes the algorithm perform the most operations.
- The average case is the input that makes the algorithm perform an average number of operations.

> Example:

```python
def linear_search(array, target):
    for i in range(len(array)):
        if array[i] == target:
            return i
    return None
```

- The best case is when the target value is equal to the value of the first element of the array, because the algorithm performs only one operation.

```python
linear_search([1, 2, 3, 4, 5], 1) # 1 operation O(1)
```

- The worst case is when the target value is equal to the value of the last element of the array, or when the target value is not in the array, because the algorithm performs `n` operations.

```python
linear_search([1, 2, 3, 4, 5], 5) # 5 operations O(n)
```

- The average case is when the target value is equal to the value of the middle element of the array, because the algorithm performs `n/2` operations.

```python
linear_search([1, 2, 3, 4, 5], 3) # 2.5 operations O(n * 1/2) = O(n)
```

- The best case is not very important, because it is not common. The worst case is the most important, because it is the most common. And the average case is important too, because it is the average number of operations that the algorithm performs.

---
