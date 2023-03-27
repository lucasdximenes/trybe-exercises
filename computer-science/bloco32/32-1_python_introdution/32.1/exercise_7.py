'''
Given a list, find the smallest element. For example, [5, 9, 3, 19, 70, 8, 100,
2, 35, 27] should return 2.
'''

number_list = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]


def smallest_number(numbers):
    smallest = numbers[0]
    for number in numbers:
        if number < smallest:
            smallest = number
    return smallest


print(smallest_number(number_list))
