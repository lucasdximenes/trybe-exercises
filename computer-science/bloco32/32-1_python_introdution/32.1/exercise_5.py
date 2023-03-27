'''
Consider that the coverage of the paint is 1 liter for every 3 square meters and
that the paint is sold in 18 liter cans, which cost R$80.00. Create a function
that returns two values in a tuple containing the amount of paint cans to be
purchased and the total price based on the size of a wall (in m²).
'''


def paint_calculator(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(paint_calculator(100))
