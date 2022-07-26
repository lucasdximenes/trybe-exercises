# Components with state and events

---

## Code execution instructions

```
npm install
```

```
npm start
```

---

## [Exercise 11.1.1](./exercise_1/)

> exercise-pokedex-state

1. **Exercise 1**

- Change your page so that instead of displaying the entire list of pokémons, it displays one pokémon at a time. When you press a Next pokémon button, the page will display the next pokémon in the list, and then the next one, and so on. When reaching the last pokémon in the list, the pokedex must return to the first pokémon by pressing the button.

2. **Exercise 2**

- Your pokedex must have two buttons containing Fire and Psychic types. From this selection, the pokedex must circulate only for pokemons of that type. When the page loads, one of these filters must be selected.

3. **Bonus**
   > Now that you got all the pokemons, can you get all the bonuses?! It's not easy to complete them all! Make as many as you can.

- Separate the CSS styles by component, making a .css file for each.

- Your pokedex must have a third button called All to reset the filter. After clicking it, the pokedex must circulate through all pokemons again. When the page loads, the selected filter should be All.

- Create a Button component and use it to make reusable buttons for your Pokedex. Tip: search for this.props.children from React!

- Make the filtering buttons dynamic: your pokedex must generate a filtering button for each type of pokémon available in the data, regardless of which or how many there are, without repetition of types. That is, if your pokedex has Fire, Psychic, Electric and Normal type pokemons, a button for each of these types should appear as a filter option. Also, she must keep the All button.

- Make the Next pokemon button disabled if the filtered pokemon list has only one pokemon.
