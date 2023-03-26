# Introduction to Python

---

## Basic operations - To fix exercises:

---

> ##### Exercise 1 - in the terminal, initialize two variables `a` and `b` with the values 10 and 5, respectively. Then, perform the following operations: sum, subtraction, multiplication, division, integer division, module, exponentiation. Print the result of each operation.

```python
a = 10
b = 5

a + b # sum result
a - b # subtraction result
a * b # multiplication result
a / b # division result
a // b # integer division result
a % b # module result
a ** b # exponentiation result
```

> ##### Exercise 2 - Declare and initialize a variable: hours = 6. How many minutes are there in 6 hours? And how many seconds? Declare and initialize variables minutes and seconds that receive the respective result of the operations. Print the result of each operation.

```python
hours = 6

minutes = hours * 60 # minutes in 6 hours
seconds = minutes * 60 # seconds in 6 hours

print(minutes)
print(seconds)
```

> ##### Exercise 3 - Test and verify what happens when you put semicolon at the end of a line of code.

```python
print("Hello World!"); # Nothing happens, python allows semicolon at the end of a line of code
```

> ##### Exercise 4 - Suppose the cover price of a book is R$24.20, but bookstores receive a 40% discount. Shipping costs 3.00 for the first copy and 75 cents for each additional copy. What is the total wholesale cost for 60 copies? Write an expression that takes the total cost and prints it.

```python
books = 60
book_price = (1 - 0.4) * 24.20
shipping = 3 + (books - 1) * 0.75
total_cost = books * book_price + shipping
print(total_cost)
```

---

## Built-in data types:

---

> Copy the list below to perform fixation exercises 5 and 6:

```python
course_modules = ["introduction", "front-end", "back-end"]
```

> ##### Exercise 5 - Add the string "data-science" to the list `course_modules` and print the result.

```python
course_modules.append("data-science")
print(course_modules)
```

> ##### Exercise 6 - Access the first element of the list `course_modules` and change it to "data-structure". Print the result.

```python
course_modules[0] = "data-structure"
print(course_modules)
```

> ##### Exercise 7 - initialize a `set` and add your name to it. Print the result.

```python
my_set = set()
my_set.add("my_name")
print(my_set)
```

> initialize the dictionary below to perform fixation exercises 8 and 9:

```python
info = {
  "personagem": "Margarida",
  "origem": "Pato Donald",
  "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}
```

> ##### Exercise 8 - Insert the key `recorrente` and the value `Sim` to the dictionary `info` and print the result.

```python
info["recorrente"] = "Sim"
print(info)
```

> ##### Exercise 9 - Remove the key 'origem' from the dictionary `info` and print the result.

```python
del info["origem"]
print(info)
```

> ##### Exercise 10 - After a database query, we have lines containing first name, last name and age such as: "Thiago", "Nobre", 29. What structure previously seen would be recommended given that after this query we only display these values?

```python
# Tuple
```

> ##### Exercise 11 - Counting how many times each element appears in a sequence is a very useful technique in solving some problems. What is the most recommended structure for storing this count?

```python
# Dictionary
my_array = [20, 20, 1, 2]

# we create a dictionary to store the frequency of each element
freq_dict = {}

# Iterate over the array
for item in my_array:
    # if the element is already in the dictionary, we increment its value by 1
    # otherwise, we add the element to the dictionary with value 1
    if (item in freq_dict):
        freq_dict[item] += 1
    else:
        freq_dict[item] = 1

# print the result
for key, value in freq_dict.items():
    print(f"{key} : {value}")

# output:
# 20: 2
# 1: 1
# 2: 1
```

> ##### Exercise 12 - The factorial of an integer is represented by multiplying all preceding numbers greater than 0. For example, the factorial of 5 is 120 because 5! = 1 _ 2 _ 3 _ 4 _ 5. Write code that calculates the factorial of an integer.

```python
n = 5
factorial = 1

while n > 0:
    factorial *= n
    n -= 1

print(factorial)

# output: 120
```

> ##### Exercise 13 - An evaluation system records values from 0 to 10 for each evaluation. After some changes these values need to be adjusted for ratings from 0 to 100. Given a sequence of ratings ratings = [6, 8, 5, 9, 10]. Write code capable of generating the ratings after the switch. In this case the result should be [60, 80, 50, 90, 100].

```python
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

print(new_ratings)

# output: [60, 80, 50, 90, 100]
```

> Can be solved with list comprehension:

```python
ratings = [6, 8, 5, 9, 10]
new_ratings = [rating * 10 for rating in ratings]
print(new_ratings)

# output: [60, 80, 50, 90, 100]
```

> ##### Exercise 14 - Go through the list from exercise 13 and print "Multiple of 3" if the element is divisible by 3.

```python
ratings = [6, 8, 5, 9, 10]
new_ratings = [rating * 10 for rating in ratings]

for rating in new_ratings:
    if rating % 3 == 0:
        print(f"{rating} is multiple of 3")

# output:
# 60 is multiple of 3
# 90 is multiple of 3
```
