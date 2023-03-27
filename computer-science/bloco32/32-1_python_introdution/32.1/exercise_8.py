'''
Write a program that, given any value n, such that n > 1, prints a right
triangle with n base asterisks on the screen. For example, for n = 5 the
triangle will have 5 asterisks at the base:

n = 5

*
**
***
****
*****
'''

n = 5
for i in range(n):
    # i + 1 because range() starts at 0 and the end is not included
    # range(5) = [0, 1, 2, 3, 4]
    print('*' * (i + 1))
