# create afunction that receives a list of numbers and returns the average of them

def average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)  # len() returns the length of the list


print(average([1, 2, 3, 4, 5]))
