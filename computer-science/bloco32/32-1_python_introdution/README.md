## Introduction to Python

---

### Basic operations

#### Arithmetic operations

```python
>>> 2 + 2 # sum
4
>>> 2 - 2 # subtraction
0
>>> 2 * 2 # multiplication
4
>>> 2 / 2 # division
1.0
>>> 2 ** 2 # exponentiation
4
>>> 2 % 2 # module
0
>>> 2 // 2 # integer division
1
```

#### Comparison operations

```python
>>> 2 == 2 # equal
True
>>> 2 != 2 # not equal
False
>>> 2 > 2 # greater than
False
>>> 2 < 2 # less than
False
>>> 2 >= 2 # greater than or equal to
True
>>> 2 <= 2 # less than or equal to
True
```

#### Logical operations

```python
>>> True and True # and
True
>>> True or False # or
True
>>> not True # not
False
```

#### Bitwise operations

```python
>>> 2 & 2 # and
2
>>> 2 | 2 # or
2
>>> ~2 # not
-3
>>> 2 ^ 2 # xor
0
>>> 2 << 2 # left shift
8
>>> 2 >> 2 # right shift
0
```

#### Assignment operations

```python
>>> a = 2 # assign
>>> a += 2 # sum and assign
>>> a -= 2 # subtraction and assign
>>> a *= 2 # multiplication and assign
>>> a /= 2 # division and assign
>>> a **= 2 # exponentiation and assign
>>> a %= 2 # module and assign
>>> a //= 2 # integer division and assign
>>> a &= 2 # and and assign
>>> a |= 2 # or and assign
>>> a ^= 2 # xor and assign
>>> a <<= 2 # left shift and assign
>>> a >>= 2 # right shift and assign
```

---

### Data types

#### Numeric

```python
>>> type(2) # integer
<class 'int'>
>>> type(2.0) # float
<class 'float'>
```

#### Boolean

```python
>>> type(True) # boolean - True or False
<class 'bool'>
```

#### String

```python
>>> type('2') # string
<class 'str'>
```

#### List (array)

```python
>>> type([2]) # list
<class 'list'>
```

> List examples:

```python
fruits = ['apple', 'banana', 'orange']
fruits[0] # apple
fruits[1] # banana
fruits[-1] # orange (last element)
fruits[-2] # banana (penultimate element) (negative index is relative to the end of the list)
fruits[0:2] # ['apple', 'banana'] (slice) (array[start:end:step])
fruits[0:3:2] # ['apple', 'orange'] (slice with step) (The step is the number of elements to skip between each element)
fruits[::2] # ['apple', 'orange'] (slice with step) (The step is the number of elements to skip between each element)
fruits[0:] # ['apple', 'banana', 'orange'] (slice with start) (The start is the index of the first element to include in the slice)
fruits[:3] # ['apple', 'banana', 'orange'] (slice with end) (The end is the index of the first element to exclude from the slice)
fruits[:] # ['apple', 'banana', 'orange'] (slice with start and end) (The start and end are the indexes of the first and last elements to include in the slice)
fruits[::-1] # ['orange', 'banana', 'apple'] (slice with step) (The step is the number of elements to skip between each element)
fruits.append('strawberry') # ['apple', 'banana', 'orange', 'strawberry'] (add element to the end of the list)
fruits.insert(0, 'strawberry') # ['strawberry', 'apple', 'banana', 'orange'] (add element to the list in a specific position)
fruits.remove('strawberry') # ['apple', 'banana', 'orange'] (remove element from the list)
fruits.pop(0) # ['banana', 'orange'] (remove element from the list in a specific position)
fruits.index('banana') # 0 (get the index of the element in the list)
fruits.count('banana') # 1 (count the number of times an element appears in the list)
fruits.sort() # ['apple', 'banana', 'orange'] (sort the list)
fruits.reverse() # ['orange', 'banana', 'apple'] (reverse the list)
fruits.clear() # [] (clear the list)
fruits.copy() # ['orange', 'banana', 'apple'] (copy the list)
```

#### Tuple (immutable array)

```python
>>> type((2,)) # tuple
<class 'tuple'>
```

> Tuple examples:

```python
fruits = ('apple', 'banana', 'orange')
fruits[0] # apple
# The tuple is immutable, so it is not possible to add, remove or change elements
# but it is possible to convert a tuple to a list and vice versa
fruits = list(fruits)
fruits.append('strawberry')
fruits = tuple(fruits)
```

#### Set (unordered collection of unique elements)\

> Sets implement mathematical set operations like union, intersection, difference, and symmetric difference.

```python
>>> type({2}) # set
<class 'set'>
```

> Set examples:

```python
permissions = {'read', 'write', 'execute'}
permissions.add('delete') # {'read', 'write', 'execute', 'delete'}
#(`add` adds a single element to a set)
permissions.add('read') # {'read', 'write', 'execute', 'delete'}
#(`add` does not add a duplicate element to a set)
permissions.update(['read', 'write', 'execute']) # {'read', 'write', 'execute', 'delete'}
#(`update` adds multiple elements to a set)
permissions.remove('read') # {'write', 'execute', 'delete'}
#(`remove` removes a single element from a set)
permissions.discard('read') # {'write', 'execute', 'delete'}
#(`discard` removes a single element from a set)
permissions.pop() # {'execute', 'delete'}
#(`pop` removes a random element from a set)
permissions.clear() # set()
#(`clear` removes all elements from a set)
permissions = {'read', 'write', 'execute'}
permissions_copy = permissions.copy() # {'read', 'write', 'execute'}
#(`copy` creates a copy of a set)
permissions = {'read', 'write', 'execute'}
permissions_2 = {'read', 'write', 'execute', 'delete'}
permissions.union(permissions_2) # {'read', 'write', 'execute', 'delete'}
#(`union` returns a new set with all elements from both sets)
permissions.intersection(permissions_2) # {'read', 'write', 'execute'}
#(`intersection` returns a new set with elements that are common to both sets)
permissions.difference(permissions_2) # set()
#(`difference` returns a new set with elements in the first set but not in the second set)
permissions.symmetric_difference(permissions_2) # {'delete'}
#(`symmetric_difference` returns a new set with elements in either the first set or the second set but not both)
permissions.isdisjoint(permissions_2) # False
#(`isdisjoint` returns True if two sets have a null intersection)
permissions.issubset(permissions_2) # True
#(`issubset` returns True if another set contains this set)
permissions.issuperset(permissions_2) # False
#(`issuperset` returns True if this set contains another set)

# set can be initialized like this:
var = set(); # empty set
```

#### frozenset (immutable unordered collection of unique elements)

> basically the same as set but immutable

```python
>>> type(frozenset({2})) # frozenset
<class 'frozenset'>
```

#### Dictionary (key-value pairs) (Object in JavaScript)

```python
>>> type({'key': 2}) # dictionary
<class 'dict'>
```

> Dictionary examples:

```python
person = {
    'name': 'John',
    'age': 30,
    'children': ['Mary', 'Peter'],
    'address': {
        'street': 'Main Street',
        'number': 123
    }
}
person['name'] # John (get value by key)
person['children'] # ['Mary', 'Peter'] (get value by key)
person['children'][1] # Peter (get value by key)
person['address']['street'] # Main Street (get value by key)
person.get('name') # John (get value by key)
person.get('phone') # None (get value by key)
person.get('phone', 'not found') # not found (get value by key)
person['name'] = 'Jane' # {'name': 'Jane', 'age': 30, 'children': ['Mary', 'Peter'], 'address': {'street': 'Main Street', 'number': 123}} (change value by key)
person['phone'] = '555-5555' # {'name': 'Jane', 'age': 30, 'children': ['Mary', 'Peter'], 'address': {'street': 'Main Street', 'number': 123}, 'phone': '555-5555'} (add key-value pair)
del(person['phone']) # {'name': 'Jane', 'age': 30, 'children': ['Mary', 'Peter'], 'address': {'street': 'Main Street', 'number': 123}} (delete key-value pair)
person.pop('age') # {'name': 'Jane', 'children': ['Mary', 'Peter'], 'address': {'street': 'Main Street', 'number': 123}} (delete key-value pair)
person.popitem() # {'name': 'Jane', 'children': ['Mary', 'Peter']} (delete last key-value pair)
person.clear() # {} (clear dictionary)
person.copy() # {'name': 'Jane', 'children': ['Mary', 'Peter']} (copy dictionary)
person.keys() # dict_keys(['name', 'children']) (get dictionary keys)
person.values() # dict_values(['Jane', ['Mary', 'Peter']]) (get dictionary values)
person.items() # dict_items([('name', 'Jane'), ('children', ['Mary', 'Peter'])]) (get dictionary items)
person.update({'name': 'John', 'age': 30}) # {'name': 'John', 'children': ['Mary', 'Peter'], 'age': 30} (update dictionary)
person = {
    'name': 'John',
    'age': 30,
    'children': ['Mary', 'Peter'],
    'address': {
        'street': 'Main Street',
        'number': 123
    }
}
```

#### range (immutable sequence of numbers)

```python
>>> type(range(2)) # range
<class 'range'>
```

> range examples:

```python
# range(start, stop, step)
range(0, 10, 1) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
range(0, 10, 2) # 0, 2, 4, 6, 8
range(10, 0, -1) # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
range(10) # 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
print(list(range(10))) # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# use list() to convert range to list
```

**Note:** `range` is not a list, it is a generator. It is used to generate a sequence of numbers over time. It is more memory efficient than lists.

#### enumerate (returns an enumerate object)

```python
>>> type(enumerate(['a', 'b', 'c'])) # enumerate
<class 'enumerate'>
```

> enumerate examples:

```python
languages = ['Python', 'JavaScript', 'Java', 'C++']
for index, language in enumerate(languages):
    print(index, language)

# 0 Python
# 1 JavaScript
# 2 Java
# 3 C++
```

enumerate can be used to get the index of an item in a list.

```python
print(enumerate(['a', 'b', 'c'])) # <enumerate object at (some address)>
# The address is the location in memory where the enumerate object is stored.
print(list(enumerate(['a', 'b', 'c']))) # [(0, 'a'), (1, 'b'), (2, 'c')]
```

---

## 3. Control Flow

### 3.1. if, elif, else

```python
if <condition>:
    # do something
elif <condition>:
    # do something
else:
    # do something
```

### 3.2. for

```python
for <variable> in <iterable>:
    # do something
```

Some iterables are: `list`, `tuple`, `set`, `dict`, `str`, `range`

> for example #1:

```python
restaurants = [
  {'name': 'McDonalds', 'rating': 3},
  {'name': 'Burger King', 'rating': 4},
  {'name': 'KFC', 'rating': 2},
  {'name': 'Pizza Hut', 'rating': 5},
  {'name': 'Subway', 'rating': 3}
]

filtered_restaurants = []
min_rating = 3

for restaurant in restaurants:
    if restaurant['rating'] >= min_rating:
        filtered_restaurants.append(restaurant)

print(filtered_restaurants)

# [{'name': 'McDonalds', 'rating': 3}, {'name': 'Burger King', 'rating': 4}, {'name': 'Pizza Hut', 'rating': 5}, {'name': 'Subway', 'rating': 3}]
```

> for example #2:

```python
for i in range(10):
    print(i)

# 0 1 2 3 4 5 6 7 8 9
```

### 3.3 list comprehension

The list comprehension is a syntactic construct available in some programming languages for creating a list based on existing lists.

> list comprehension example based on for example #1:

```python
min_rating = 3
filtered_restaurants = [
    restaurant # Here we can specify what we want to add to the list
    # restaurant['name'] # Here we will add only the names of the restaurant
    # that have a rating greater than or equal to min_rating
    for restaurant in restaurants
    if restaurant['rating'] >= min_rating
]
print(filtered_restaurants)

# [{'name': 'McDonalds', 'rating': 3}, {'name': 'Burger King', 'rating': 4}, {'name': 'Pizza Hut', 'rating': 5}, {'name': 'Subway', 'rating': 3}]
```

> list comprehension example #2:

```python
names_list = ['John', 'Jane', 'Mary']
first_letters = [
    name[0] # Here we add the first letter of each name
    for name in names_list # Here we iterate over the names_list
    if 'a' in name # Here we filter the names that contain the letter 'a'
]

print(first_letters)

# ['J', 'M']
```

> list comprehension example #3:

```python
squares = [x**2 for x in range(10)]
print(squares)

# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

### 3.4. while

```python
while <condition>:
    # do something
```

> while example:

```python
i = 0
while i < 10:
    print(i)
    i += 1

# 0 1 2 3 4 5 6 7 8 9
```

> while example #2:

```python
n = 10
last, next = 0, 1
while next < n:
    print(next)
    last, next = next, last + next
# This is the Fibonacci sequence

# 1 1 2 3 5 8
```

### 3.5. break, continue, pass

```python
for i in range(10):
    if i == 5:
        break # stop the loop
    print(i)

# 0 1 2 3 4
```

```python
for i in range(10):
    if i == 5:
        continue # skip the current iteration
    print(i)

# 0 1 2 3 4 6 7 8 9

```

```python
for i in range(10):
    if i == 5:
        pass # do nothing
    print(i)

# 0 1 2 3 4 5 6 7 8 9
```

---

## 4. Functions

### 4.1. Defining a function

```python
def <function_name>(<parameters>):
    # do something
    return <value>
```

> function example:

```python
def add(a, b):
    return a + b

print(add(1, 2)) # 3
```

### 4.2. Default parameters

```python
def <function_name>(<parameters>):
    # do something
    return <value>
```

> function example:

```python
def add(a, b=2):
    return a + b

print(add(1)) # 3

# If we don't specify the value of b, it will be 2 by default
```

### 4.3. Keyword arguments

```python
def <function_name>(<parameters>):
    # do something
    return <value>
```

> function example:

```python
def add(a, b):
    return a + b

print(add(b=2, a=1)) # 3

# We can specify the value of the parameters by their name
```

### 4.4. Variable number of arguments

```python
def <function_name>(<parameters>):
    # do something
    return <value>
```

> function example:

```python
def add(*args): # *args is a tuple
    total = 0
    for arg in args:
        total += arg
    return total

print(add(1, 2, 3, 4, 5)) # 15

# We can pass any number of arguments
```

### 4.5. Variable number of keyword arguments

```python
def <function_name>(<parameters>):
    # do something
    return <value>
```

> function example:

```python
def add(**kwargs): # **kwargs is a dictionary
    total = 0
    for key, value in kwargs.items():
        total += value
    return total

print(add(a=1, b=2, c=3, d=4, e=5)) # 15

# We can pass any number of keyword arguments
```

### 4.6. Lambda functions

```python
lambda <parameters>: <expression>
```

> lambda function example:

```python
add = lambda a, b: a + b
print(add(1, 2)) # 3
```
