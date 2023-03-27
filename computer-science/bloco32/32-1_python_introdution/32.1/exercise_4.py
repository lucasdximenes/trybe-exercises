'''
Create a function that takes a list of names and returns the name with the most
characters. For example, for ["José", "Lucas", "Nádia", "Fernanda", "Cairo",
"Joana"]
'''

name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def biggest_name(names):
    biggest = ''
    for name in names:
        if len(name) > len(biggest):
            biggest = name
    return biggest


print(biggest_name(name_list))
