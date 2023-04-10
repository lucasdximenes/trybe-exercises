# POO - Design patterns

---

Design patterns are solutions to common problems in software design. They are not a finished design that can be transformed directly into code. They are a description or template for how to solve a problem that can be used in many different situations.

Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

Design patterns are not a finished design that can be transformed directly into code. They are a description or template for how to solve a problem that can be used in many different situations.

Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.

---

## Design patterns categories

- Creational
- Structural
- Behavioral

---

### Creational

The creational design patterns are concerned with the way in which objects are created. Object creation logic becomes too convoluted, especially when an object must be created before its dependencies are known. The solution to this problem is to defer the object creation logic until it is needed.

examples:

- Factory Method - Define an interface for creating an object, but let subclasses decide which class to instantiate. Factory Method lets a class defer instantiation to subclasses.

- Abstract Factory - Provide an interface for creating families of related or dependent objects without specifying their concrete classes.

- Builder - Separate the construction of a complex object from its representation so that the same construction process can create different representations.

- Prototype - Specify the kinds of objects to create using a prototypical instance, and create new objects by copying this prototype.

- Singleton - Ensure a class only has one instance, and provide a global point of access to it.

---

### Structural

The structural design patterns are concerned with how classes and objects are composed to form larger structures. Inheritance is used to compose interfaces and define ways to compose objects to obtain new functionality.

examples:

- Adapter - Convert the interface of a class into another interface clients expect. Adapter lets classes work together that couldn't otherwise because of incompatible interfaces.

- Bridge - Decouple an abstraction from its implementation so that the two can vary independently.

- Composite - Compose objects into tree structures to represent part-whole hierarchies. Composite lets clients treat individual objects and compositions of objects uniformly.

- Decorator - Attach additional responsibilities to an object dynamically. Decorators provide a flexible alternative to subclassing for extending functionality.

- Facade - Provide a unified interface to a set of interfaces in a subsystem. Facade defines a higher-level interface that makes the subsystem easier to use.

---

### Behavioral

The behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

examples:

- Chain of Responsibility - Avoid coupling the sender of a request to its receiver by giving more than one object a chance to handle the request. Chain the receiving objects and pass the request along the chain until an object handles it.

- Command - Encapsulate a request as an object, thereby letting you parameterize clients with different requests, queue or log requests, and support undoable operations.

- Interpreter - Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.

- Iterator - Provide a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

- Mediator - Define an object that encapsulates how a set of objects interact. Mediator promotes loose coupling by keeping objects from referring to each other explicitly, and it lets you vary their interaction independently.

---
