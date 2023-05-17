"""
Hash table is a data structure that implements an associative array abstract
data type, a structure that can map keys to values. A hash table uses a hash
function to compute an index, also called a hash code, into an array of buckets
or slots, from which the desired value can be found.

Ideally, the hash function will assign each key to a unique bucket, but most
hash table designs employ an imperfect hash function, which might cause hash
collisions where the hash function generates the same index for more than one
key. Such collisions are always accommodated in some way.

Collision can be solved by:
    - Chaining: each bucket is independent, and has some sort of list of
    entries with the same index. The time for hash table operations is
    the time to find the bucket (which is constant) plus the time for
    the list operation.
    - Open addressing: in the case of a collision, the program keeps looking
    for the next empty bucket. The time for hash table operations is the time
    to find the bucket (which is constant) plus the time to look through the
    entries of the bucket.

Hash tables are commonly used in computer software for rapid data lookup. The
hash function is used to transform the key into the index (the hash) of an
array element (the slot or bucket) where the corresponding value is to be
sought.
"""

# Problem: you need to implement a way to find a employee by his id number.

# Solution:

# Employee


class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


'''
# Hash table implementation
class HashTable:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def _hash(self, id_num):
        return id_num % 10

    def get_address(self, id_num):
        return self._hash(id_num)

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def remove(self, id_num):
        address = self.get_address(id_num)
        self._buckets[address] = None

    def update(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name
'''

'''
# Testing
if __name__ == "__main__":
    # Creating employees
    emp1 = Employee(123, "John")
    emp2 = Employee(456, "Mary")
    emp3 = Employee(789, "Peter")
    emp4 = Employee(101, "Paul")
    emp5 = Employee(112, "Joseph")

    # Creating hash table
    hash_table = HashTable()

    # Inserting employees
    hash_table.insert(emp1)
    hash_table.insert(emp2)
    hash_table.insert(emp3)
    hash_table.insert(emp4)
    hash_table.insert(emp5)

    # Getting value
    print(hash_table.get_value(123))  # 3
    print(hash_table.get_value(456))  # 6
    print(hash_table.get_value(789))  # 9
    print(hash_table.get_value(101))  # 1
    print(hash_table.get_value(112))  # 2

    # Updating value
    hash_table.update(123, "John Doe")
    print(hash_table.get_value(123))

    # Removing value
    hash_table.remove(123)
    print(hash_table.has(123))

    # Checking if hash table has a value
    print(hash_table.has(123))
    print(hash_table.has(456))
    print(hash_table.has(789))
    print(hash_table.has(101))
    print(hash_table.has(112))

    # Printing hash table
    print(hash_table._buckets)
'''

# But, what if the hash function generates the same index for more than one key
# This is called `collision`. There are two ways to solve this problem:
# chaining and open addressing.

# Chaining: each bucket is independent, and has some sort of list of entries
# with the same index. The time for hash table operations is the time to find
# the bucket (which is constant) plus the time for the list operation.

# Open addressing: in the case of a collision, the program keeps looking for
# the next empty bucket. The time for hash table operations is the time to find
# the bucket (which is constant) plus the time to look through the entries of
# the bucket.

# Chaining implementation


class HashTable:
    def __init__(self):
        self._buckets = [[] for i in range(10)]
        # Different from the previous implementation, here we have a list of
        # lists. Each list is a bucket.

    def _hash(self, id_num):
        return id_num % 10

    def get_address(self, id_num):
        return self._hash(id_num)

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)
        # Here we append the employee to the bucket list.

    def get_value(self, id_num):
        address = self.get_address(id_num)
        # Here we iterate over the bucket list.
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                # If the employee id number is equal to the id number argument,
                return employee.name  # we return the employee name.
        return None  # If the employee is not found, we return None.

    def has(self, id_num):
        address = self.get_address(id_num)
        # Here we iterate over the bucket list.
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                # If the employee id number is equal to the id number argument,
                return True
        return False  # If the employee is not found, we return False.

    def remove(self, id_num):
        address = self.get_address(id_num)
        # Here we iterate over the bucket list.
        for i, employee in enumerate(self._buckets[address]):
            if employee.id_num == id_num:
                # If the employee id number is equal to the id number argument,
                del self._buckets[address][i]
                # we delete the employee from the bucket list.
                return True
        return False  # If the employee is not found, we return False.

    def update(self, id_num, new_name):
        address = self.get_address(id_num)
        # Here we iterate over the bucket list.
        for employee in self._buckets[address]:
            if employee.id_num == id_num:
                # If the employee id number is equal to the id number argument,
                employee.name = new_name
                # we update the employee name.
                return True
        return False
