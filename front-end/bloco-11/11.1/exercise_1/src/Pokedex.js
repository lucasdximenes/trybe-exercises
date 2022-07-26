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
    };
  }

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

  render() {
    const { pokemons } = this.props;
    const { pokemonIndex, pokemonTypeFilter } = this.state;

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
          <Pokemon key={ pokemon.id } pokemon={ pokemon } />
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
