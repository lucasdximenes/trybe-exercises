import React from 'react';
import { arrayOf } from 'prop-types';

import Pokemon from './Pokemon';
import { pokemonType } from './types';

import Button from './components/Button';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonIndex: 0,
      pokemonTypeFilter: 'All',
      favoritePokemons: [],
    };
  }

  componentDidMount = () => {
    this.getSavedPokemons();
  };

  nextPokemon = (pokemonsList) => {
    const { pokemonIndex } = this.state;

    if (pokemonIndex === pokemonsList.length - 1) {
      this.setState({ pokemonIndex: 0 });
    } else {
      this.setState((prevState) => ({
        pokemonIndex: prevState.pokemonIndex + 1,
      }));
    }
  };

  setFilter = (filter) => {
    this.setState({ pokemonTypeFilter: filter });
  };

  resetIndex = () => {
    this.setState({ pokemonIndex: 0 });
  };

  favoritePokemon = (pokemon) => {
    const { favoritePokemons } = this.state;
    if (!favoritePokemons.includes(pokemon)) {
      localStorage.setItem(
        'favoritePokemons',
        JSON.stringify([...favoritePokemons, pokemon]),
      );
      this.setState({ favoritePokemons: [...favoritePokemons, pokemon] });
    }
  };

  removeFavoritePokemon = (pokemon) => {
    const { favoritePokemons } = this.state;
    const newFavoritePokemons = favoritePokemons.filter(
      (favoritePokemon) => favoritePokemon !== pokemon,
    );
    localStorage.setItem(
      'favoritePokemons',
      JSON.stringify(newFavoritePokemons),
    );
    this.setState({ favoritePokemons: newFavoritePokemons });
  };

  getSavedPokemons = () => {
    const favoritePokemons = localStorage.getItem('favoritePokemons');
    if (favoritePokemons) {
      this.setState({ favoritePokemons: JSON.parse(favoritePokemons) });
    }
  };

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex, pokemonTypeFilter, favoritePokemons } = this.state;

    const pokemonTypes = pokemons
      .map((pokemon) => pokemon.type)
      .filter((value, index, self) => self.indexOf(value) === index);

    const filteredPokemons = pokemons.filter((pokemon) => {
      if (pokemonTypeFilter === 'All') {
        return true;
      }
      return pokemon.type === pokemonTypeFilter;
    });

    const getPokemon = [filteredPokemons[pokemonIndex]];

    return (
      <div className="pokedex">
        {getPokemon.map((pokemon) => (
          <Pokemon
            key={ pokemon.id }
            pokemon={ pokemon }
            favoritePokemon={ this.favoritePokemon }
            removeFavoritePokemon={ this.removeFavoritePokemon }
            favoritePokemons={ favoritePokemons }
          />
        ))}

        <div className="pokedex-btns">
          <Button
            key="All"
            text="All"
            className="all-pokemons-btn"
            onClick={ () => {
              this.resetIndex();
              this.setFilter('All');
            } }
          />

          {pokemonTypes.map((type) => (
            <Button
              key={ type }
              text={ type }
              className="button"
              onClick={ () => {
                this.resetIndex();
                this.setFilter(type);
              } }
            />
          ))}

          <Button
            key="nextPokemon"
            text="Next Pokemon"
            className="next-button"
            onClick={ () => this.nextPokemon(filteredPokemons) }
            disabled={ filteredPokemons.length === 1 }
          />
        </div>
      </div>
    );
  }
}

Pokedex.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default Pokedex;
