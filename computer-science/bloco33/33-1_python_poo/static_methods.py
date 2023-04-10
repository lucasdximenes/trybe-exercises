# Python POO - Static Methods

# Static methods are methods that are bound to a class rather than its object.
# They do not require a class instance creation. So, they are not dependent on
# the state of the object.

# Static methods are used to create utility functions. They are used to group
# functions which have some logical connection with the class.

# Static methods are called using the class name and not the object name.

# Static methods are created using the @staticmethod decorator.

# Static methods are not used very often. Most of the time, we use static
# methods to create factory methods. Factory methods return class objects
# (similar to a constructor) for different use cases.

# Example:

class ClassWithStaticMethod:
    @staticmethod
    def static_method():
        print("This is a static method")

    def normal_method(self):
        print("This is a normal method")


ClassWithStaticMethod.static_method()
# This is a static method

# We can also call the static method using an object of the class.
# But, it is not recommended to do so.

obj = ClassWithStaticMethod()
obj.static_method()
# This is a static method


# Class methods are methods that are bound to the class and not the object of
# the class. They have the access to the state of the class as it takes a
# class parameter that points to the class and not the object instance.

# They can modify a class state that would apply across all the instances of
# the class. For example, they can modify a class variable that will be
# applicable to all the instances.

# Example:

class ClassWithClassMethod:
    class_var = 0

    @classmethod  # decorator
    def class_method(cls):
        # cls => is the class itself
        cls.class_var += 1
        print("This is a class method")

    def normal_method(self):
        print("This is a normal method")


ClassWithClassMethod.class_method()
print(ClassWithClassMethod.class_var)  # 1
ClassWithClassMethod.class_method()
print(ClassWithClassMethod.class_var)  # 2
# This is a class method
