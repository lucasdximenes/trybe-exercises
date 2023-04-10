# Strategy design pattern

# The strategy pattern is a behavioral design pattern that lets you define a
# family of algorithms, put each of them into a separate class, and make their
# objects interchangeable.

'''
Problem example:
The company have a application to do a payment based on the bank, but sometimes
the bank can change the rules to do a payment and the application break.

example:
  class Payment:
      @classmethod
      def do_payment(cls, bank, account, value):
          if bank == 'itau':
              # do payment in itau
          elif bank == 'bradesco':
              # do payment in bradesco
          elif bank == 'caixa':
              # do payment in caixa
          elif bank == 'santander':
              # do payment in santander
          # ... +100 banks
          else:
              raise Exception('Bank not found')

The problem is that the application break when the bank change the rules to do
a payment, and a maintenance is needed to fix the application but the code has
a lot of if/else and the maintenance is very expensive.
'''

# Solution:
'''
A first solution is to create a class for each bank and move the code of each
bank to the class, but the code will be very repetitive and the maintenance
will be very expensive. To solve this problem the strategy pattern can be used
to create a family of algorithms, put each of them into a separate class, and
make their objects interchangeable.
'''

# -----------------------------------------------------------------------------

# The application:

# class Payment:
#     @classmethod
#     def do_payment(cls, bank, account, value):
#         # The do_payment method receives a bank object as a parameter
#         bank.do_payment(account, value)
#         # The do_payment method calls the do_payment method of the bank object

# -----------------------------------------------------------------------------

# The banks:


# class Itau:
#     def do_payment(self, account, value):
#         # do payment in itau
#         pass


# class Bradesco:
#     def do_payment(self, account, value):
#         # do payment in bradesco
#         pass


# class Caixa:
#     def do_payment(self, account, value):
#         # do payment in caixa
#         pass


# class Santander:
#     def do_payment(self, account, value):
#         # do payment in santander
#         pass

# ... +100 banks

# -----------------------------------------------------------------------------

# The application and the strategy:


'''
The application and the strategy:
The application and the strategy are very similar to the adapter pattern, but
the strategy pattern is used to change the behavior of an object, while the
adapter pattern is used to change the interface of an object.
'''

# The application:




from abc import ABC, abstractmethod
class BankStrategy(ABC):
    @classmethod
    @abstractmethod
    def do_payment(cls, account, value):
        pass


class ItauStrategy(BankStrategy):
    @classmethod
    def do_payment(cls, account, value):
        # do payment in itau
        pass


class BradescoStrategy(BankStrategy):
    @classmethod
    def do_payment(cls, account, value):
        # do payment in bradesco
        pass


class CaixaStrategy(BankStrategy):
    @classmethod
    def do_payment(cls, account, value):
        # do payment in caixa
        pass


class SantanderStrategy(BankStrategy):
    @classmethod
    def do_payment(cls, account, value):
        # do payment in santander
        pass


class Payment:
    def __init__(self, bank_strategy) -> None:
        self.__bank_strategy = bank_strategy

    def do_payment(self, account, value):
        # The do_payment method receives a bank_strategy object as a parameter
        self.__bank_strategy.do_payment(account, value)
        # The do_payment method calls the do_payment method of the
        # bank_strategy object

# -----------------------------------------------------------------------------

# usage:


Payment(ItauStrategy).do_payment('1234-5', 100)
Payment(BradescoStrategy).do_payment('1234-5', 100)
Payment(CaixaStrategy).do_payment('1234-5', 100)
Payment(SantanderStrategy).do_payment('1234-5', 100)

'''
Here the application receives a bank_strategy object as a parameter and calls
the do_payment method of the bank_strategy object.
'''
