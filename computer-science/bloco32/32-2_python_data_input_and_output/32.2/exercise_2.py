'''
Scrambled word game. Develop a game in which the user has to guess a
word that will be shown with scrambled letters. The program will take a list of
words and choose one at random. The player will have three attempts to guess the
word. At the end, the word must be shown on the screen, informing whether the
person won or lost the game.

🦜 To scramble a word do: scrambled_word = "".join(random.sample(word,
len(word)))

🦜 Raffling a random word can be done using the choice method:
random.choice(["word1", "word2", "word3"]) -> "word2".

Modify the program to read a list of words from a file. The file must be
created in advance and contain one word per line. The program must read the
words from the file and randomly choose one to be used in the game.
'''

import random


with open("./exercise_2_words.txt", "r") as file:
    words = file.readlines()  # readlines() returns a list of lines
    # Example: ['word1\n', 'word2\n', 'word3']
    # The \n is the newline character
    random_word = random.choice(words).strip()
    scrambled_word = "".join(random.sample(random_word, len(random_word)))

try_count = 0
while try_count < 3:
    print(f"Scrambled word: {scrambled_word}")
    guess = input("Guess the word: ")
    if guess.upper() == random_word.upper():
        print("You win!")
        break
    else:
        print("Try again!")
        try_count += 1

print(f"The word was {random_word}")
