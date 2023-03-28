'''
Using the `pokemons.json` file, let's write a program that randomly
draws a pokemon. The program should ask the user “Who is this pokemon?” until
she hits him. For each error, present a number of letters of that pokemon's name
equal to the number of errors.

Example: The pokemon drawn by the program is butterfree; the user kicks
charizard; the program should display b. Then the person kicks blastoise; the
program must display bu; and so on until the person gets it right.

🦜 You can use the random module's choice method to randomly draw a pokemon. Ex:
random.choice(pokemon) -> {"name": "Pikachu" }.
'''

import json
import random

with open("./pokemons.json", "r") as file:
    pokemons = json.load(file)

pokemon = random.choice(pokemons["results"])
pokemon_name = pokemon["name"]
pokemon_name_length = len(pokemon_name)
number_of_errors = 0

while number_of_errors < pokemon_name_length:
    user_guess = input("Who is this pokemon? ")
    if user_guess.upper() == pokemon_name.upper():
        print("You got it!")
        break
    else:
        number_of_errors += 1
        print(pokemon_name[:number_of_errors])
