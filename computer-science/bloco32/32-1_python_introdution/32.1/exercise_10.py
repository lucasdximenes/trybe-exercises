'''
A service station is selling fuel with the following discount table:

Alcohol:
  - Up to 20 litres, 3% discount per litre;
  - Above 20 liters, 5% discount per liter.
Gasoline:
  - Up to 20 litres, 4% discount per litre;
  - Above 20 liters, 6% discount per liter.

Write a function that receives the number of liters sold, the type of fuel
(coded as follows: A - alcohol, G - gasoline), and returns the amount to be paid
by the customer, knowing that the price of a liter of gasoline is R$2.50, and
the price of a liter of alcohol is R$1.90.
'''


def fuel_calculator(liters, fuel_type):
    if fuel_type == 'A':
        price = 1.9
        if liters <= 20:
            discount = 0.03
        else:
            discount = 0.05
    elif fuel_type == 'G':
        price = 2.5
        if liters <= 20:
            discount = 0.04
        else:
            discount = 0.06
    else:
        return 'Invalid fuel type'
    return liters * (price - (price * discount))


print(fuel_calculator(20, 'A'))
