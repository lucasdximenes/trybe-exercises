'''
Create a function that takes an integer N and returns the sum of all numbers
from 1 to N. For example, for N = 5, the expected value will be 15.
'''


def sum_numbers(n):
    total = 0
    # + 1 because range() starts at 0
    # range(5) = [0, 1, 2, 3, 4]
    # range(5 + 1) = [0, 1, 2, 3, 4, 5]
    # range(1, 5) = [1, 2, 3, 4] # the initial value is included, but the end is not
    for i in range(n + 1):
        total += i
    return total


print(sum_numbers(5))
