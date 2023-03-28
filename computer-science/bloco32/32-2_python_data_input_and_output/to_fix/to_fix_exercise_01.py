'''
Make a program that asks for the name of a user and prints it vertically.
Example:

F
U
L
A
N
O
'''

name = input('Enter your name: ').upper()
for letter in name:
    print(letter)
