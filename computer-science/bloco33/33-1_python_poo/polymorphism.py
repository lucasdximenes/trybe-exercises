# Python POO - Polymorphism

'''
Polymorphism is the ability to take different forms. In programming,
polymorphism is a concept by which we can perform a single action in different
ways.
'''


from abc import ABC, abstractmethod


class Animal:
    def __init__(self, name) -> None:
        self.name = name

    def __str__(self) -> str:
        return f"Animal: {self.name}"

    def make_sound(self):
        raise NotImplementedError(
            "Subclass must implement this abstract method")

    def walk(self):
        print("Walking")


class Dog(Animal):
    def make_sound(self):
        print("Barking")


class Cat(Animal):
    def make_sound(self):
        print("Meowing")


class Fish(Animal):
    def make_sound(self):
        print("Blub blub")

    def walk(self):
        raise NotImplementedError("Fish can't walk")


'''
Abstract classes are classes that contain one or more abstract methods. An
abstract method is a method that is declared, but contains no implementation.
Abstract classes may not be instantiated, and require subclasses to provide
implementations for the abstract methods.
'''

# Abstract class example:


'''
abc stands for Abstract Base Classes. It is a module that provides an
abstract base class for creating a set of interfaces that a derived class
must provide.

The ABC class is a subclass of the class 'type'. It has a metaclass of
ABCMeta. The ABCMeta metaclass is responsible for registering the abstract
methods of the abstract base class.

abstractmethod is a decorator that is used to declare that a particular
method of a class is abstract and must be implemented by its subclasses.
'''


class Database(ABC):
    @abstractmethod
    def connect(self):
        pass
        '''
        Here we can use `pass` because we don't want to implement the
        method in the abstract class. We just want to declare it.
        `...` and `raise NotImplementedError` are also valid.
        '''

    @abstractmethod
    def disconnect(self):
        pass

    @abstractmethod
    def insert(self):
        pass

    @abstractmethod
    def update(self):
        pass

    @abstractmethod
    def delete(self):
        pass

    @abstractmethod
    def select(self):
        pass

    @abstractmethod
    def query(self):
        pass


class MySQL(Database):
    def connect(self):
        print("Connecting to MySQL")

    def disconnect(self):
        print("Disconnecting from MySQL")

    def insert(self):
        print("Inserting data in MySQL")

    def update(self):
        print("Updating data in MySQL")

    def delete(self):
        print("Deleting data in MySQL")

    def select(self):
        print("Selecting data in MySQL")

    def query(self):
        print("Querying data in MySQL")


class MongoDB(Database):
    def connect(self):
        print("Connecting to MongoDB")

    def disconnect(self):
        print("Disconnecting from MongoDB")

    def insert(self):
        print("Inserting data in MongoDB")

    def update(self):
        print("Updating data in MongoDB")

    def delete(self):
        print("Deleting data in MongoDB")

    def select(self):
        print("Selecting data in MongoDB")

    def query(self):
        print("Querying data in MongoDB")


'''
Interfaces are a way to define a set of methods that a class must implement.
Interfaces are not implemented in Python, but we can use abstract classes
to simulate interfaces.
'''

# Interface example:


def do_a_query(database: Database):
    '''
    Here we are using the abstract class Database as a type hint. This way,
    we can only pass objects that are subclasses of Database to this function.
    '''
    database.connect()
    database.query()
    database.disconnect()
    '''
    But we can use `isinstance` to check if the object is an instance of a
    specific class.

    e.g.:
    if isinstance(database, MySQL):
        database.connect()
        database.query()
        database.disconnect()
    else:
        print("This is not a valid database")
    '''
