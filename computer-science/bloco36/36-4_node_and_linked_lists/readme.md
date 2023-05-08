# Node (ADT)

## What is a Node?

A node is a fundamental part of many data structures, such as linked lists, trees, and graphs. Nodes are essentially the building blocks of these data structures, which means they store data and also link to other nodes. In linked lists, nodes are elements of the list. In trees, nodes are called leaves. In graphs, nodes are sometimes called vertices.

Nodes contain two key pieces of information:

- Data, or the value that the node stores.
- Next, a reference to the next node in the data structure. This reference is sometimes referred to as a pointer.

## Node Implementation

In Python, we can represent a node using a class. Below, we have an example of a node class that stores integers.

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
```

In the code above, we define a class called `Node` that has two properties: `data` and `next`. The `data` property stores the data contained within the node. The `next` property is initialized to `None` and will point to the next node in the linked list.

## Node Usage

Let's create a few nodes and link them together to create a linked list.

```python

# Create nodes
first_node = Node(3)
second_node = Node(4)
third_node = Node(5)

# Link nodes
first_node.next = second_node
second_node.next = third_node

# Access data
print(first_node.data) # 3
print(second_node.data) # 4
print(third_node.data) # 5

# Traverse the list
current_node = first_node
while current_node is not None:
    print(current_node.data)
    current_node = current_node.next
```

In the code above, we create three nodes and link them together to create a linked list. We then access the data stored in each node and traverse the list to print out each node's data.

---

# Linked Lists

## What is a Linked List?

A linked list is a linear data structure that consists of a sequence of nodes. Each node contains data and a link to the next node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. However, a linked list does not allow random access to elements. For example, to access the 10th element of a linked list, we have to iterate through the first 9 elements.

## Difference Between Arrays and Linked Lists

Arrays and linked lists are similar in that they both store collections of data. However, there are some key differences between the two data structures.

- Arrays are stored in contiguous memory locations, whereas linked lists are stored in non-contiguous memory locations.
- Arrays allow for random access to elements, whereas linked lists do not.
- Arrays have a fixed size, whereas linked lists can grow or shrink in size.
- Inserting and deleting elements from an array is expensive, whereas inserting and deleting elements from a linked list is cheap.
- Arrays are faster at accessing elements, whereas linked lists are faster at inserting and deleting elements.

## Common Operations on Linked Lists

The most common operations on linked lists are:

| Operation      | Description                                     | Complexity |
| -------------- | ----------------------------------------------- | ---------- |
| insert_first   | Insert a node at the beginning of the list      | O(1)       |
| insert_last    | Insert a node at the end of the list            | O(n)       |
| insert_at      | Insert a node at a given position in the list   | O(n)       |
| remove_first   | Remove the first node from the list             | O(1)       |
| remove_last    | Remove the last node from the list              | O(n)       |
| remove_at      | Remove a node from a given position in the list | O(n)       |
| clear          | Remove all nodes from the list                  | O(n)       |
| get_element_at | Get the element at a given position in the list | O(n)       |
| is_empty       | Check if the list is empty                      | O(1)       |

## Linked List Implementation

In Python, we can represent a linked list using a class. Below, we have an example of a linked list class that stores integers.

```python
class LinkedList:
    def __init__(self):
        self.head = None
```

In the code above, we define a class called `LinkedList` that has one property: `head`. The `head` property is initialized to `None` and will point to the first node in the linked list.

## Linked List Usage

Let's create a linked list and add some nodes to it.

```python
# Create linked list
linked_list = LinkedList()

# Create nodes
first_node = Node(3)
second_node = Node(4)
third_node = Node(5)

# Link nodes
linked_list.head = first_node
first_node.next = second_node
second_node.next = third_node

# Access data
print(linked_list.head.data) # 3
print(linked_list.head.next.data) # 4
print(linked_list.head.next.next.data) # 5

# Traverse the list
current_node = linked_list.head
while current_node is not None:
    print(current_node.data)
    current_node = current_node.next
```

In the code above, we create a linked list and add three nodes to it. We then access the data stored in each node and traverse the list to print out each node's data.

---

# Doubly Linked Lists

## What is a Doubly Linked List?

A doubly linked list is a linear data structure that consists of a sequence of nodes. Each node contains data and links to the next node and the previous node in the sequence. This structure allows for efficient insertion or removal of elements from any position in the sequence during iteration. However, a doubly linked list does not allow random access to elements. For example, to access the 10th element of a doubly linked list, we have to iterate through the first 9 elements.

## Difference Between Linked Lists and Doubly Linked Lists

Linked lists and doubly linked lists are similar in that they both store collections of data. However, there are some key differences between the two data structures.

- Linked lists only have a link to the next node, whereas doubly linked lists have a link to the next node and the previous node.
- Linked lists allow for efficient insertion or removal of elements from the beginning of the list, whereas doubly linked lists allow for efficient insertion or removal of elements from the beginning or end of the list.
- Linked lists require less memory than doubly linked lists, whereas doubly linked lists require more memory than linked lists.

## Doubly Linked List Implementation

In Python, we can represent a doubly linked list using a class. Below, we have an example of a doubly linked list class that stores integers.

```python
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
```

In the code above, we define a class called `DoublyLinkedList` that has two properties: `head` and `tail`. The `head` property is initialized to `None` and will point to the first node in the doubly linked list. The `tail` property is initialized to `None` and will point to the last node in the doubly linked list.

## Doubly Linked List Usage

Let's create a doubly linked list and add some nodes to it.

```python
# Create doubly linked list
doubly_linked_list = DoublyLinkedList()

# Create nodes
first_node = Node(3)
second_node = Node(4)
third_node = Node(5)

# Link nodes
doubly_linked_list.head = first_node
first_node.next = second_node
second_node.next = third_node
third_node.prev = second_node
second_node.prev = first_node
doubly_linked_list.tail = third_node

# Access data
print(doubly_linked_list.head.data) # 3
print(doubly_linked_list.head.next.data) # 4
print(doubly_linked_list.head.next.next.data) # 5
print(doubly_linked_list.tail.data) # 5
print(doubly_linked_list.tail.prev.data) # 4
print(doubly_linked_list.tail.prev.prev.data) # 3

# Traverse the list
current_node = doubly_linked_list.head
while current_node is not None:
    print(current_node.data)
    current_node = current_node.next
```

In the code above, we create a doubly linked list and add three nodes to it. We then access the data stored in each node and traverse the list to print out each node's data.

---
