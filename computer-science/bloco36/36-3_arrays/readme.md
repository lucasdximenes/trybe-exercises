# Abstract Data Types (ADT)

An Abstract Data Type (ADT) is a high-level description of a collection of related data and the operations that can be performed on that data. The term "abstract" refers to the fact that the data type is described in terms of its behavior and not its implementation.

For example, consider the abstract data type "Stack." A stack is a collection of elements, but the order in which they are stored and retrieved is restricted. A stack follows a "last-in, first-out" (LIFO) policy, meaning the most recently added element is the first one to be removed. The operations that can be performed on a stack include "push" (add an element to the top of the stack), "pop" (remove the top element from the stack), "peek" (return the top element without removing it), and "isEmpty" (check if the stack is empty).

ADTs are useful in programming because they provide a standardized interface for working with data structures. Programmers can use these interfaces to write code that is independent of the specific implementation details of the data structure. For example, a programmer might use the Stack ADT to write a program that stores and retrieves elements in a LIFO order, without worrying about how the elements are actually stored in memory.

Common examples of ADTs include stacks, queues, linked lists, trees, and graphs. Each of these data structures is described in terms of its behavior and the operations that can be performed on it.

## ADT vs. Data Structure (DS)

An ADT is a high-level description of a collection of related data and the operations that can be performed on that data. A data structure is a concrete implementation of an ADT. For example, a stack is an ADT that follows a "last-in, first-out" (LIFO) policy. A stack can be implemented using an array or a linked list, but the underlying implementation details are not part of the ADT.

> - ## List ADT: An Example

A List is an ordered collection of elements, where each element is identified by an index or a position within the collection. The List ADT provides operations for inserting, retrieving, and removing elements at specific positions within the list.

    The operations that can be performed on a List ADT include:

    add(element, index): Add the given element to the list at the specified index.
    remove(index): Remove the element at the specified index from the list.
    get(index): Retrieve the element at the specified index from the list.
    set(index, element): Replace the element at the specified index with the given element.
    size(): Return the number of elements in the list.
    isEmpty(): Return true if the list contains no elements.

There are different ways to implement a List data structure, such as using an array, linked list, or dynamic array. However, the List ADT provides a standardized interface for working with these different implementations, allowing programmers to write code that is independent of the specific implementation details.

---

### Array

An example of DS is the Array. An array is a data structure that stores a collection of elements in contiguous memory locations. The elements can be accessed using an index or position within the array. Arrays are commonly used to implement other data structures, such as lists, stacks, queues, and hash tables.

```python
# Example of implementation of (List ADT) using an array
class ListADT:
    def __init__(self):
        self.data = []

    def add(self, element, index):
        self.data.insert(index, element)

    def remove(self, index):
        return self.data.pop(index)

    def get(self, index):
        return self.data[index]

    def set(self, index, element):
        self.data[index] = element

    def size(self):
        return len(self.data)

    def isEmpty(self):
        return len(self.data) == 0

new_list = ListADT()
new_list.add(1, 0)
new_list.add(2, 1)
new_list.add(3, 2)

print(new_list.data) # [1, 2, 3]

# ...
```

---
