# Observer Design Pattern

'''
The Observer Design Pattern: The observer pattern is a behavioral design
pattern that lets you define a subscription mechanism to notify multiple
objects about any events that happen to the object they’re observing.
'''

'''
Problem example:
Implement a system to notify the user when a new product is available in the
store.
'''

'''
Solution:
The solution is to create a subject class that will be responsible for
maintaining a list of observers and notifying them when a new product is
available in the store.
'''

# -----------------------------------------------------------------------------

# The application:




from abc import ABC, abstractmethod
class Product:
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price


class Store:
    def __init__(self) -> None:
        self.products = []
        self.observers = []

    def attach(self, observer):
        self.observers.append(observer)

    def detach(self, observer):
        self.observers.remove(observer)

    def notify(self):
        for observer in self.observers:
            observer.update(self)

    def add_product(self, product):
        self.products.append(product)
        self.notify()

    def get_products(self):
        return self.products


# -----------------------------------------------------------------------------


# The observers:


class Observer(ABC):
    @abstractmethod
    def update(self, subject):
        pass


class EmailNotification(Observer):
    def update(self, subject):
        print('Email notification: A new product was added to the store.')


class SMSNotification(Observer):
    def update(self, subject):
        print('SMS notification: A new product was added to the store.')


# -----------------------------------------------------------------------------

# The client code:


if __name__ == '__main__':
    store = Store()

    email_notification = EmailNotification()
    sms_notification = SMSNotification()

    store.attach(email_notification)
    store.attach(sms_notification)

    store.add_product(Product('iPhone', 1000))
    store.add_product(Product('Samsung Galaxy', 900))
    store.add_product(Product('Xiaomi', 700))
    store.add_product(Product('Huawei', 800))
