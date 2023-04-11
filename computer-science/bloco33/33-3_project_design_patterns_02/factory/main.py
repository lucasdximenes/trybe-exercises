# Factory design pattern

'''
Factory design pattern is a creational design pattern that provides an interface
for creating objects in a superclass, but allows subclasses to alter the type
of objects that will be created.

Factory Method is a creational design pattern that provides an interface for
creating objects in a superclass, but allows subclasses to alter the type of
objects that will be created.

Abstract Factory is a creational design pattern that lets you produce families
of related objects without specifying their concrete classes.
'''

from abc import ABC, abstractmethod


class Item(ABC):
    @abstractmethod
    def __repr__(self) -> str:
        # The `__repr__` method is used to represent the object as a string. It
        # is used for debugging and logging. print() and str() will call this
        pass


class ItemHamburger(Item):
    def __repr__(self) -> str:
        return 'Hamburger'


class ItemSoda(Item):
    def __repr__(self) -> str:
        return 'Soda'


class ItemFries(Item):
    def __repr__(self) -> str:
        return 'Fries'


class ItemIceCream(Item):
    def __repr__(self) -> str:
        return 'Ice Cream'


class Combo(ABC):
    def __init__(self) -> None:
        self.items = []
        self.create_combo()

    @abstractmethod
    def create_combo(self):
        pass

    def get_items(self):
        return self.items

    def add_item(self, item):
        self.items.append(item)


class ComboKids(Combo):
    def create_combo(self):
        self.add_item(ItemHamburger())
        self.add_item(ItemSoda())
        self.add_item(ItemFries())


class ComboTeen(Combo):
    def create_combo(self):
        self.add_item(ItemHamburger())
        self.add_item(ItemSoda())
        self.add_item(ItemFries())
        self.add_item(ItemIceCream())


class ComboAdult(Combo):
    def create_combo(self):
        self.add_item(ItemHamburger())
        self.add_item(ItemSoda())
        self.add_item(ItemFries())
        self.add_item(ItemIceCream())
        self.add_item(ItemIceCream())


class ComboFactory:
    def get_combo(self, combo_type):
        if combo_type == 'kids':
            return ComboKids()
        elif combo_type == 'teen':
            return ComboTeen()
        elif combo_type == 'adult':
            return ComboAdult()
        else:
            raise Exception('Invalid combo type')


if __name__ == '__main__':
    choice = input('What combo do you want? (kids, teen, adult): ')
    combo = ComboFactory().get_combo(choice)
    print('Your combo is: ', combo.get_items())
