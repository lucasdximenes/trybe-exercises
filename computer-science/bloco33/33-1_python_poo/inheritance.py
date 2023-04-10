# Python POO - Inheritance

'''
Inheritance is a way to form new classes using classes that have already been
defined. The newly formed classes are called derived classes, the classes that
we derive from are called base classes.
'''


class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def __str__(self):
        return f'Person: {self.name}, {self.age} years old'

    def walk(self):
        print('Walking')


class Student(Person):
    '''
    In python, to inherit from a class, we pass the class name as a parameter
    to the definition of the new class.
    If we want to inherit from multiple classes, we pass the class names as a
    parameter to the definition of the new class. (Multiple Inheritance)
    ex: class class_name(base_class1, base_class2, ...):
    '''

    def __init__(self, name, age, registration):
        super().__init__(name, age)
        self.registration = registration

    def __str__(self):
        return f'Student: {self.name}, {self.age} years old, {self.registration}'

    def study(self):
        print('Studying')

    def student_walk(self):
        # "super()" is used to call the method of the base class.
        super().walk()


class Teacher(Person):
    def __init__(self, name, age, salary):
        super().__init__(name, age)
        self.salary = salary

    def __str__(self):
        return f'Teacher: {self.name}, {self.age} years old, {self.salary}'

    def teach(self):
        print('Teaching')


if __name__ == '__main__':
    person = Person('John', 30)
    print(person)
    person.walk()
    print()

    student = Student('Jane', 20, 123456)
    print(student)
    student.walk()
    student.study()
    print()

    teacher = Teacher('Jack', 40, 10000)
    print(teacher)
    teacher.walk()
    teacher.teach()
    print()

    '''
    The derived class inherits the methods of the base class.
    The derived class can also override the methods of the base class.
    The derived class can also extend the functionality of the base class.

    The student and teacher classes inherit the person class.
    The student and teacher classes override the __str__ method of the person
    class.
    '''
