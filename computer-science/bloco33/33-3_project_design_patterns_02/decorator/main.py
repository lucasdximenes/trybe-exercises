# Decorator design pattern

# The decorator pattern is a structural design pattern that lets you attach new
# behaviors to objects by placing these objects inside special wrapper objects
# that contain the behaviors.

# Example:

class Calculator:
    def sum(self, a, b):
        return a + b


calc = Calculator()
print(calc.sum(1, 2))  # Here all is ok

# But what if we want to add a recognition of 'string' numbers?
# example: calc.sum('one', 'two') # should return 3

# We can do it like this:


class DecoratedCalculator:
    def __init__(self, calculator):
        self.calculator = calculator

    def convert_to_int(self, num):
        if not isinstance(num, str):
            return num

        return {
            "one": 1,
            "two": 2,
            "three": 3,
            "four": 4,
            "five": 5,
            "six": 6,
            "seven": 7,
            "eight": 8,
            "nine": 9,
            "ten": 10,
        }.get(num, 0)

    def sum(self, a, b):
        return self.calculator.sum(
            self.convert_to_int(a),
            self.convert_to_int(b)
        )


calc = DecoratedCalculator(Calculator())
print(calc.sum('one', 'two'))  # 3
print(calc.sum(1, 2))  # 3
