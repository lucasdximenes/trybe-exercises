import React, { Component } from 'react';
import { arrayOf } from 'prop-types';
import { pokemonType } from '../types';

class FavoritePokemons extends Component {
  state = {
    favoritePokemons: [],
  };

  componentDidMount = () => {
    this.getSavedPokemons();
  };

  getSavedPokemons = () => {
    const favoritePokemons = localStorage.getItem('favoritePokemons');
    if (favoritePokemons) {
      this.setState({ favoritePokemons: JSON.parse(favoritePokemons) });
    }
  };

  filterPokemons = () => {
    const { pokemons } = this.props;
    const { favoritePokemons } = this.state;
    return pokemons.filter((pokemon) => favoritePokemons.includes(pokemon.id));
  };

  render() {
    const filtered = this.filterPokemons();
    return (
      <div>
        <h1>Favorite Pokemons</h1>
        {filtered.length > 0 ? (
          <ul>
            {filtered.map((pokemon) => (
              <li key={ pokemon.id }>
                <p>{pokemon.name}</p>
                <img src={ pokemon.image } alt={ pokemon.name } />
              </li>
            ))}
          </ul>
        ) : (
          <p>No favorite pokemons yet</p>
        )}
      </div>
    );
  }
}

FavoritePokemons.propTypes = {
  pokemons: arrayOf(pokemonType).isRequired,
};

export default FavoritePokemons;
