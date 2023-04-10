# Python POO

class Example:
    def __init__(self) -> None:
        '''
        __init__ is a special method that is called when an instance of the
        class is created. It is used to initialize the attributes of the class.

        self -> is a reference to the current instance of the class, and is used
        to access variables that belong to the class.
        '''
        print("Initializing Example class")
        self.__private = "Private attribute"

    def __new__(cls, *args, **kwargs):
        '''
        __new__ is a special method that is called before __init__.
        It is used to create the object, and return the object created.

        cls -> is a reference to the class, and is used to access class variables.
        *args -> is the list of arguments passed to the function. Example: (1, 2, 3)
        **kwargs -> is the dictionary of arguments passed to the function. Example: {"a": 1, "b": 2}
        '''
        print("Creating new instance of Example class")
        instance = super().__new__(cls)
        return instance

    def __private_method(self):
        '''
        Private method
        `__` -> is used to define a private method
        `self` -> is used to access the attributes of the class
        '''
        print("Private method")

    def public_method(self):
        '''
        Public method
        `self` -> is used to access the attributes of the class
        '''
        print("Public method")


class Car:
    def __init__(self, color, power, brand) -> None:
        self.color = color
        self.power = power
        self.brand = brand

    def __str__(self) -> str:
        # __str__ is used to return a string representation of the object
        # It is used when you print the object
        return f"Car: {self.color}, {self.power}, {self.brand}"

    def accelerate(self):
        print("Accelerating")

    def brake(self):
        print("Braking")


car = Car("Red", "1.0", "Fiat")
carTwo = Car(color="Blue", power="1.6", brand="Ford")

print(car)
print(carTwo)

car.accelerate()
car.brake()

# Output:
# Car: Red, 1.0, Fiat
# Car: Blue, 1.6, Ford
# Accelerating
# Braking
