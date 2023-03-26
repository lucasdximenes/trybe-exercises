PI = 3.14


def square(side):
    '''Calculates the area of a square'''
    return side * side


def rectangle(base, height):
    '''Calculates the area of a rectangle'''
    return base * height


def circle(radius):
    '''Calculates the area of a circle'''
    return PI * radius ** 2

# We can acess docstrings of functions from a module using the `__doc__` attribute
# of the function. For example:
# print(area.square.__doc__)
# output:
# Calculates the area of a square


if __name__ == "__main__":  # This code will be executed only when the module is
    # executed, not when it is imported.
    print(square(2))
    print(rectangle(2, 3))
    print(circle(2))
