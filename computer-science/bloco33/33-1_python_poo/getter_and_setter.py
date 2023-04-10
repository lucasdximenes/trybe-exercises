# python - poo - getter and setter

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def get_name(self):
        return self.name

    def set_name(self, name):
        self.name = name

    '''    
    def get_age(self):
        return self.age

    def set_age(self, age):
        self.age = age
    '''
    # Using property decorator
    @property
    def age(self):
        return self.__age

    @age.setter
    def age(self, age):
        self.__age = age
    '''
    The property decorator is used to define a property for a class.
    It is used to define a getter, setter, and deleter for an attribute.
    '''

    def __str__(self):
        return f'Person: {self.name}, {self.age} years old'


if __name__ == '__main__':
    person = Person('John', 30)
    print(person)
    person.set_name('Jane')
    person.age = 40
    print(person)
