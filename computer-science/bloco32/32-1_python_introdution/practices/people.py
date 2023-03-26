import area
# area.py is a module that contains the functions square, rectangle and circle.
# import area will import the module area and make it available to use in this
# file. area.py will be executed and the functions will be available to use.
# if we can use only a specific function from a module, we can use:
# from area import square

PEOPLE_PER_SQUARE_METER = 2
FIELD_LENGTH = 60  # meters
FIELD_WIDTH = 45  # meters

people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)

print(f"There are {people_at_concert} people at the concert.")
'''
4
6
12.56
There are 5400 people at the concert.
'''  # This is the output of the code above, the first 3 lines are the output of
# the functions from area.py and the last line is the output of the code above.
# the print of area.py is shown because the module area is imported and the
# functions are executed when the module is imported.

# if we don't want to print the output of the functions from area.py, we can
# modify the code in area.py to:
'''
if __name__ == '__main__':
    # <prints>
'''
# `__name__` is a special variable that is set to the name of the module when
# the module is imported. When the module is executed, `__name__` is set to
# `__main__`. So, if we want to execute some code only when the module is
# executed, we can use the code above.
