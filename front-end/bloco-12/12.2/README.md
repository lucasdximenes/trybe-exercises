# react router

---

## Code execution instructions

```
npm install
```

```
npm start
```

---

## [exercise-pokedex-router](./exercise-pokedex-router/)

---

### Exercise 1

1. When loading the application in the URL path "/", the Pokédex must be shown.

---

### Exercise 2

2. Add a navigation link to the pokémon being shown by the Pokédex, so that whoever uses the application can click on the link to see more details about the pokémon in question. The URL path name is up to you. Remember that you need to pass a pokémon identifier to the URL, so that each pokémon is uniquely associated with the URL path. That is, if you want the details of a pokémon to be found in the URL path `/pokemons`, you need to pass a URL parameter to that path so that only one pokémon is displayed. Every pokémon has an `id` in the Pokédex, so you could use it as a URL parameter to allow whoever uses your application to access details of the pokémon `Pikachu` via the URL path `/pokemons/25`, where `25` is the `id` of `Pikachu`.

---

### Exercise 3

3. Create a PokemonDetails component to be used to view more details of the pokémon in the previous step. The following information must be displayed:

- Pokemon's name;

- Type of pokemon;

- Weight of the pokémon, with its proper weight measurement;

- Informative summary about the pokémon;

- Map(s) that show(s) the possible locations of the pokémon.

---

### Exercise 4

4. Add a fixed set of navigation links at the top of your application so that it is always available to anyone who uses it. At the beginning, add a link that takes those who use your app back to the Pokédex.

---

### Exercise 5

5. Create an `About` component to be used in the visualization that briefly explains what a Pokédex is, with some illustrative image.

---

### Exercise 6

6. Add a link to the fixed set of navigation links that allows users to take your application to the Pokédex explainer view.

---

### Exercise 7

7. Create a `NotFound` component, so that it is only rendered if the current path of the application's URL does not match any previously defined route.

---

## Bonus

---

### Exercise 8

8. Allow a pokémon to be favorited within your more detail view. Once favorited, add some visual cue, so that anyone who sees the pokémon knows it was favorited. The indication that the pokémon has been favorited must also appear on the main page, which shows the Pokédex;

---

### Exercise 9

9. Create a view that shows only the favorite pokemons and make it accessible to anyone who uses it, creating a link to it in the fixed set of links you made earlier;

---

### Exercise 10

10. Save your favorite pokemons in local storage and retrieve them when the application starts.

---
