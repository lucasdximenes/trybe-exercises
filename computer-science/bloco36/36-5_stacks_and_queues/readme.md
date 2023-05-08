# Stack

Stack is a data structure that follows the LIFO (Last In, First Out) principle. This means that the last element added to the stack will be the first to be removed.

Stacks are used to solve problems that follow the LIFO principle, such as the "undo" function in text editors.

Stacks can be implemented using arrays or linked lists. In this lesson, we will implement a stack using a linked list.

## Stack ADT

A stack is an ADT that follows a "last-in, first-out" (LIFO) policy. A stack can be implemented using an array or a linked list, but the underlying implementation details are not part of the ADT.

The operations that can be performed on a Stack ADT include:

- push(element): Add the given element to the top of the stack.
- pop(): Remove and return the top element from the stack.
- peek(): Return the top element from the stack without removing it.
- size(): Return the number of elements in the stack.
- isEmpty(): Return true if the stack contains no elements.

## Stack Implementation

In this lesson, we will implement a stack using a linked list. The stack will be represented by a linked list where the top of the stack is the head of the list. The push() and pop() operations will be implemented by adding and removing elements from the head of the list.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self._size = 0

    def push(self, element):
        node = Node(element)
        node.next = self.top
        self.top = node
        self._size = self._size + 1

    def pop(self):
        if self._size > 0:
            node = self.top
            self.top = self.top.next
            self._size = self._size - 1
            return node.value
        raise IndexError("The stack is empty")

    def peek(self):
        if self._size > 0:
            return self.top.value
        raise IndexError("The stack is empty")

    def __len__(self):
        return self._size

    def __repr__(self):
        r = ""
        pointer = self.top
        while(pointer):
            r = r + str(pointer.value) + "\n"
            pointer = pointer.next
        return r

    def __str__(self):
        return self.__repr__()
```

---

# Queue

Queue is a data structure that follows the FIFO (First In, First Out) principle. This means that the first element added to the queue will be the first to be removed.

Queues are used to solve problems that follow the FIFO principle, such as the "print queue" in a computer.

Queues can be implemented using arrays or linked lists. In this lesson, we will implement a queue using a linked list.

## Queue ADT

A queue is an ADT that follows a "first-in, first-out" (FIFO) policy. A queue can be implemented using an array or a linked list, but the underlying implementation details are not part of the ADT.

The operations that can be performed on a Queue ADT include:

- enqueue(element): Add the given element to the end of the queue.
- dequeue(): Remove and return the first element from the queue.
- peek(): Return the first element from the queue without removing it.
- size(): Return the number of elements in the queue.
- isEmpty(): Return true if the queue contains no elements.

## Queue Implementation

In this lesson, we will implement a queue using a linked list. The queue will be represented by a linked list where the front of the queue is the head of the list and the rear of the queue is the tail of the list. The enqueue() and dequeue() operations will be implemented by adding and removing elements from the tail of the list.

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self._size = 0

    def enqueue(self, element):
        node = Node(element)
        if self._size > 0:
            self.rear.next = node
        else:
            self.front = node
        self.rear = node
        self._size = self._size + 1

    def dequeue(self):
        if self._size > 0:
            node = self.front
            self.front = self.front.next
            self._size = self._size - 1
            return node.value
        raise IndexError("The queue is empty")

    def peek(self):
        if self._size > 0:
            return self.front.value
        raise IndexError("The queue is empty")

    def __len__(self):
        return self._size

    def __repr__(self):
        r = ""
        pointer = self.front
        while(pointer):
            r = r + str(pointer.value) + "\n"
            pointer = pointer.next
        return r

    def __str__(self):
        return self.__repr__()
```

---
