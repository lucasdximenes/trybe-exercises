# Python - structuring an application

---

## Modules:

A module is a file containing Python definitions and statements. The file name is the module name with the suffix .py appended. Within a module, the module’s name (as a string) is available as the value of the global variable **name**.

Modules are imported from other modules by using the import command. For example, to import the module fibo.py, write:

```python
import fibo
```

This does not enter the names of the functions defined in fibo directly in the current symbol table; it only enters the module name fibo there. Using the module name you can access the functions:

```python
fibo.fib(1000)
```

There is a variant of the import statement that imports names from a module directly into the importing module’s symbol table. For example:

```python
from fibo import fib, fib2
```

This does not introduce the module name fibo into the current symbol table; it only introduces the function names fib and fib2. It is also possible to import all names that a module defines:

```python
from fibo import *
```

This imports all names except those beginning with an underscore (\_). It is considered bad practice in production code.

## Packages:

Packages are a way of structuring Python’s module namespace by using “dotted module names”. For example, the module name A.B designates a submodule named B in a package named A. Just like the use of modules saves the authors of different modules from having to worry about each other’s global variable names, the use of dotted module names saves the authors of multi-module packages like NumPy or Pillow from having to worry about each other’s module names.

> Ex:

```
import http
from http import client
from http.client import HTTP_PORT
```

## Virtual Environments:

A virtual environment is a tool that helps to keep dependencies required by different projects separate by creating isolated python virtual environments for them. It solves the “Project X depends on version 1.x but, Project Y needs 4.x” dilemma, and keeps your global site-packages directory clean and manageable.

`venv` - Is the tool to create isolated Python environments. The venv module comes with Python 3.3 and later.

To create a virtual environment, decide upon a directory where you want to place it, and run the venv module as a script with the directory path:

```python
python3 -m venv .venv # or some other name
```

This will create the tutorial-env directory if it doesn’t exist, and also create directories inside it containing a copy of the Python interpreter, the standard library, and various supporting files.

To begin using the virtual environment, it needs to be activated:

```python
source .venv/bin/activate # start the virtual environment
```

To verify that the virtual environment is active, you can run:

```sh
which python
```

and you should see the path to the virtual environment’s Python interpreter.

To deactivate the virtual environment, run:

```sh
deactivate # can be `source deactivate`
```

---

## Data Input and Output:

> ### `input()`:

The `input()` function allows user input. It takes in a string argument which is a prompt, and then returns whatever the user types into the standard input device (usually the keyboard). The return value is a string, regardless of what the user typed in.

```python
# Example:
name = input("What is your name? ")
print("Hi, %s." % name)
```

```python
# Example 2:
name = input("What is your name? ")
age = int(input("How old are you? "))
print("Hi, %s. You are %d years old." % (name, age))
```

> Othe way to receive an input is through the `sys` module:

```python
import sys

name = sys.argv[1]
age = int(sys.argv[2])
print("Hi, %s. You are %d years old." % (name, age))
```

To execute the script, you need to pass the arguments to the script:

```sh
python3 script.py "John" 25
```

```python
import sys

if __name__ == "__main__":
    for argument in sys.argv: # sys.argv is a list of arguments passed to the script
        print(argument)
```

> ### `print()`:

The `print()` function prints the given object to the standard output device (screen) or to the text stream file.

```python
print("Hello World!")
# output: Hello World!
```

```python
print("Hello", "World!")
# output: Hello World!
```

```python
print("Hello", "World!", sep="***") # sep is the separator
# output: Hello***World!
```

```python
print("Hello", "World!", sep="***", end="***\n") # end is the end of the line
# output: Hello***World!***
```

```python
import sys
print("Hello", "World!", sep="***", end="***\n", file=sys.stderr) # file is the output stream
# output: Hello***World!*** (in the stderr) # stderr is the standard error
```

```python
name = "John"
age = 25
value = 1.23456789
print(f"Hi, {name}. You are {age} years old.") # f-string
# output: Hi, John. You are 25 years old.
print("Hi, {}. You are {} years old.".format(name, age)) # format
# output: Hi, John. You are 25 years old.
print("Hi, %s. You are %d years old." % (name, age)) # old way
# output: Hi, John. You are 25 years old.
print("float: %.2f" % value) # float with 2 decimal places
# output: float: 1.23
print(f"float: {value:.2f}") # float with 2 decimal places
# output: float: 1.23
print("{}").format(value) # float with 6 decimal places
```

---

## Unpacking of values:

The `unpacking` is a feature of Python that allows you to assign multiple variables in a single line. It is also called `destructuring assignment` in other languages.

```python
a, b, c = 1, 2, 3

print(a) # 1
print(b) # 2
print(c) # 3
```

```python
head, *tail = [1, 2, 3, 4, 5] # We use the * to unpack the rest of the values

print(head) # 1
print(tail) # [2, 3, 4, 5]
```

```python
a, b, *c = [1, 2, 3, 4, 5]

print(a) # 1
print(b) # 2
print(c) # [3, 4, 5]
```

```python
a, *b, c = [1, 2, 3, 4, 5]

print(a) # 1
print(b) # [2, 3, 4]
print(c) # 5
```

---

## File Input and Output:

> ### `open()`:

The `open()` function opens a file and returns a file object. The file object can be used to read or write the file.

```python
file = open("file.txt", "r") # open the file in read mode
'''
r - read
w - write
a - append
r+ - read and write
w+ - write and read
a+ - append and read
The difference between the modes is that "w" truncates the file, while "a" appends to the end of the file.
'''
```

file object has a `read()` method for reading the content of the file:

```python
file = open("file.txt", "r")
content = file.read() # read the whole file
print(content)
```

```python
file = open("file.txt", "r")
content = file.read(5) # read the first 5 characters
print(content)
```

```python
file = open("file.txt", "r")
content = file.readline() # read the first line
print(content)
```

```python
file = open("file.txt", "r")
content = file.readlines() # read all the lines
print(content)
```

```python
file = open("file.txt", "r")
for line in file:
    print(line)
```

```python
file = open("file.txt", "r")
content = file.read()
print(content)
file.close() # close the file
```

It's important to close the file after you are done with it. Closing a file will free up the resources that were tied with the file and is done using the `close()` method.

file object has a `write()` method for writing to the file:

```python
file = open("file.txt", "w")
file.write("Hello World!") # This will overwrite the file
# If you can write another line, you need to add a new line character
file.write("\nHello World!")
file.close()
```

can write with `print()`

```python
file = open("file.txt", "w")
print("Hello World!", file=file) # This will overwrite the file
# to append to the file, you need to open the file in append mode
file.close()
```

write multiple lines

```python
file = open("file.txt", "w")
file.writelines(["Hello World!\n", "Hello World!\n", "Hello World!\n"])
file.close()
```

---

## Exceptions:

> ### `try` and `except`:

The `try` and `except` block in Python is used to catch and handle exceptions. Python executes code following the `try` statement as a `normal` part of the program. The code that follows the `except` statement is the program's response to any exceptions in the preceding `try` clause.

```python
try:
    print(1 / 0)
except ZeroDivisionError:
    print("You can't divide by zero!")
```

```python
while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")
```

> Exceptions while manipulating files:

```python
try:
    file = open("file.txt", "r")
except OSError:
    # handle the error
    print("An error occurred while opening the file")
else: # if there is no error
    # do something
    print("The file was opened successfully")
finally: # this will be executed no matter what happens
    # do something
    print("The file was closed successfully")
    file.close()
```

> ### `with`:

The `with` statement in Python is used in exception handling to make the code cleaner and much more readable. It simplifies the management of common resources like file streams.

```python
with open("file.txt", "r") as file:
    content = file.read()
    print(content)
    # the file will be closed automatically after the with block

# the file is closed
```

---

## json:

> ### `json` module:

The `json` module provides an API similar to `pickle` for converting in-memory Python objects to a serialized representation known as JavaScript Object Notation (JSON).

- read json file:

  ```python
  import json

  with open("file.json", "r") as file:
      data = json.load(file) # load the json file
      print(data)
  ```

- write json file:

  ```python
    import json
    with open("file.json", "w") as file:
        json.dump(data, file) # dump the data to the json file
        # .dump() = transform the data to json format
  ```

JSON files do not follow the usual `read` and `write` nomenclature as they are considered data `serialization` formats. Then follow the same nomenclatures used in modules such as marshal and pikle, which are also serialization formats.

---

## csv:

> ### `csv` module:

The `csv` module implements classes to read and write tabular data in CSV format.

- read csv file:

  ```python
  import csv

  with open("file.csv", "r") as file:
      data = csv.reader(file) # read the csv file
      for row in data:
          print(row)
  ```

  ```python
  import csv

    with open("file.csv", "r") as file:
        data = csv.reader(file)
        header, *rows = data # unpack the data
  ```

- write csv file:

  ```python
    import csv

    with open("file.csv", "w") as file:
        writer = csv.writer(file) # create a writer object
        writer.writerow(["Name", "Age"]) # write a row to the csv file
        # the first row will be the header
        writer.writerow(["John", 20]) # Each row is a list
        writer.writerow(["Mary", 21])
  ```

> ##### `DictReader` and `DictWriter`:

The `DictReader` and `DictWriter` classes allow you to read and write data in the form of dictionaries.

- read csv file:

  ```python
  import csv

  with open("file.csv", "r") as file:
      data = csv.DictReader(file) # read the csv file, data is like a list of dictionaries
      for row in data: # each row is a dictionary
          print(row)
  ```

- write csv file:

  ```python
    import csv

    with open("file.csv", "w") as file:
        fieldnames = ["Name", "Age"] # the header
        writer = csv.DictWriter(file, fieldnames=fieldnames)
        writer.writeheader() # write the header
        writer.writerow({"Name": "John", "Age": 20}) # write a row
        writer.writerow({"Name": "Mary", "Age": 21})
  ```

---

## Environment Variables:

> ### `os` module:

The `os` module in Python provides functions for interacting with the operating system. This module provides a portable way of using operating system dependent functionality.

- get environment variables:

  ```python
  import os

  print(os.environ) # get all the environment variables
  print(os.environ["PATH"]) # get a specific environment variable
  ```

- set environment variables:

  ```python
    import os

    os.environ["PATH"] = "C:\\Program Files\\Python39" # set a specific environment variable
  ```

- set environment variable given an .env file:

  ```python
    #using decouple
    from decouple import config

    print(config("PATH"))
  ```
