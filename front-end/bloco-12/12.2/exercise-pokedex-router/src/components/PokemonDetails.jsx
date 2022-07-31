import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import propTypes from 'prop-types';

class PokemonDetails extends Component {
  findPokemonDetails = () => {
    const { pokemons, match } = this.props;
    const { id } = match.params;
    const foundPokemon = pokemons.find(
      (pokemon) => pokemon.id === parseInt(id, 10),
    );
    return foundPokemon;
  };

  render() {
    if (!this.findPokemonDetails()) {
      return <Redirect to="/404" />;
    }
    const { name, type, averageWeight, summary, foundAt } = this.findPokemonDetails();
    return (
      <div>
        <h1>{name}</h1>
        <p>
          <strong>Type: </strong>
          {type}
        </p>
        <p>
          <strong>Average weight: </strong>
          {`${averageWeight.value} ${averageWeight.measurementUnit}`}
        </p>
        <p>
          <strong>Summary: </strong>
          {summary}
        </p>

        <p>
          <strong>Found at: </strong>
          {' '}
        </p>
        {foundAt.map(({ location, map }) => (
          <div key={ location }>
            <p>{location}</p>
            <img src={ map } alt={ `Map of ${location}` } />
          </div>
        ))}
      </div>
    );
  }
}

PokemonDetails.propTypes = {
  pokemons: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
    }),
  ).isRequired,
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default PokemonDetails;
