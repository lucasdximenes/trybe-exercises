'''
Write a program that takes several natural numbers and calculates the sum of
these values. If any input value is invalid (for example a letter), a message
must be displayed in the error output in the following format: “Error adding
values, {value} is an invalid value”. At the end, you must print the sum of
valid values.

🦜 Receive the values in the same input, asking the user to separate them with a
space. Receive the values in str format and use the split method to get each
separate value. The isdigit method, built into the str type, can be used to
check whether the string corresponds to a natural number.
'''

numbers = input('Enter some numbers separated by space: ').split()
total = 0

for number in numbers:
    if number.isdigit():
        total += int(number)
    else:
        print(f"Error adding values, {number} is an invalid value")

print(total)
