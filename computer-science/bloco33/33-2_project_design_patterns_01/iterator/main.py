# Iterator Design Pattern

'''
Iterator Design Pattern: The iterator pattern is a behavioral design pattern
that lets you traverse elements of a collection without exposing its underlying
representation (list, stack, tree, etc.).

Problem example:
    A client needs to create reports for each employee in a company, before
    the reports was created manually, but now the company has grown and the
    number of employees is too large to create the reports manually. The
    problem is because the application can't load all employees in memory
    at the same time, so the application needs to load the employees
    incrementally, one by one, and create the reports for each employee.
'''

# Solution:

# The solution is to create an iterator that will be responsible for
# traversing the collection of employees and loading them one by one.

from collections.abc import Iterable, Iterator


class DbSimulation:
    def __init__(self) -> None:
        self.employees = [
            {'name': 'John', 'age': 23},
            {'name': 'Mary', 'age': 32},
            {'name': 'Peter', 'age': 28},
            {'name': 'Susan', 'age': 25},
            {'name': 'Mike', 'age': 35},
            {'name': 'Linda', 'age': 29},
            {'name': 'Karen', 'age': 31},
            {'name': 'Brad', 'age': 27},
            {'name': 'Steve', 'age': 33},
            {'name': 'Lisa', 'age': 30},
        ]

    def get(self, query, page):
        # Simulate a query to the database
        # The query returns a page of employees
        # The page size is 2
        # The query returns a list of employees
        per_page = 2

        if query == 'select * from employees':
            start = (page - 1) * per_page
            end = start + per_page
            return self.employees[start:end]
        else:
            return None


'''
The DbSimulation class simulates a database, it has a list of employees
and a method to simulate a query to the database. The query returns a
page of employees, the page size is 2, and the query returns a list of
employees.
'''


class DatabaseIterable(Iterable):
    def __init__(self, db, query) -> None:
        self.db = db
        self.query = query

    '''
    Here we return a object that implements the Iterator interface,
    this object will be responsible for traversing the collection of
    employees and loading them one by one.
    '''

    def __iter__(self):
        return DatabaseIterator(self.db, self.query)


class DatabaseIterator(Iterator):
    def __init__(self, db, query) -> None:
        self.db = db
        self.query = query
        self.page = 1
        self.employees = []
        '''
        Here we initialize the iterator, we set the page to 1, and we
        initialize the employees list.
        '''

    def __next__(self):
        '''
        The __next__ method is called when we use the next function.
        The `next` function is called in the `for` loop, and the `for`
        loop calls the `__next__` method.
        '''
        # print(f"Actual employees list: {self.employees}")
        if not self.employees:
            '''
            If the employees list is empty, we load the next page of
            employees from the database.
            '''
            self.employees = self.db.get(self.query, self.page)
            self.page += 1

            if not self.employees:
                '''
                If the employees list is empty, it means that we have
                reached the end of the collection, so we raise the
                StopIteration exception.
                '''
                raise StopIteration

        return self.employees.pop(0)


# First we create a DbSimulation object
db = DbSimulation()

# Then we create a DatabaseIterable object
employees = DatabaseIterable(db, 'select * from employees')

# Now we can iterate over the employees
for employee in employees:
    '''
    In `for` loop, the `employees` object is converted to an iterator
    object, and the `__iter__` method is called, which returns a
    DatabaseIterator object, which implements the Iterator interface.
    The `__next__` method is called, which loads the next page of
    employees from the database, and returns the first employee in the
    list, and then removes it from the list.
    '''
    print(employee)

'''
The utility of the iterator pattern is that we can traverse the
collection of employees without getting all employees in memory at the
same time, and without having to know the underlying representation of
the collection (list, stack, tree, etc.). We don't need to know how the
collection is implemented, we just need to know how to traverse it.

The iterator pattern is very useful when we need to traverse a large
collection of elements.
'''

a_random_list = [
    'a',
    'b',
    'c',
    'd',
    'e',
]

iterator = iter(a_random_list)
'''
iter is a built-in function that returns an iterator object, which
implements the Iterator interface.
'''
print(iterator)  # <list_iterator object at <memory address>>

# a - returns the first element in the list because we called the next function only once
print(next(iterator))
# b - returns the second element in the list because we called the next function twice
print(next(iterator))
