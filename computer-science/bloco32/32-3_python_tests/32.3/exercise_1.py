'''
🚀 Exercise 1: Write a program that returns a list with numerical values from 1
to N, but with the following exceptions:

Numbers divisible by 3 should appear as “Fizz” instead of the number;

Numbers divisible by 5 should appear as “Buzz” instead of the number;

Numbers divisible by 3 and 5 should appear as “FizzBuzz” instead of the number.

Example: 3 -> [1, 2, "Fizz"].
'''


def fizzbuzz(n):
    list = []
    for i in range(1, n + 1):
        if i % 3 == 0 and i % 5 == 0:
            list.append("FizzBuzz")
        elif i % 3 == 0:
            list.append("Fizz")
        elif i % 5 == 0:
            list.append("Buzz")
        else:
            list.append(i)
    return list


print(fizzbuzz(15))
