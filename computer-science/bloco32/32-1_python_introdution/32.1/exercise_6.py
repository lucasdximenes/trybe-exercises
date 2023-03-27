'''
Create a function that receives the three sides of a triangle and informs the
type of triangle formed or "it is not a triangle", if it is not possible to form
a triangle.
'''


def triangle_type(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3 and
        side2 + side3 > side1 and
        side1 + side3 > side2
    )
    if not is_triangle:
        return 'it is not a triangle'
    elif side1 == side2 == side3:
        return 'equilateral'
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return 'isosceles'
    else:
        return 'scalene'


print(triangle_type(3.5, 4, 3))
