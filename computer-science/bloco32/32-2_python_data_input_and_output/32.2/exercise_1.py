'''
Make a program that receives a name and prints it vertically in an inverted
ladder. Example: 

Input:
PEDRO

Output:
PEDRO
PEDR
PED
PE
P
'''


def vertical_ladder(name):
    for i in range(len(name), 0, -1):  # range(start, stop, step)
        # When the step is negative, the range is inverted
        # Example: range(5, 0, -1) => 5, 4, 3, 2, 1
        print(name[:i])
        # name[:i] => This is a slice of the string, from the
        # beginning to the index i (not included)
        # Example: name = 'PEDRO'
        # name[:i] => 'PEDRO', 'PEDR', 'PED', 'PE', 'P'
        # name[:4] => 'PEDR' (not included the index 4)


if __name__ == '__main__':
    name = input('Enter a name: ')
    vertical_ladder(name)
