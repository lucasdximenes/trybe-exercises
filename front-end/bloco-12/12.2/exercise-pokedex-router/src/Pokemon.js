import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { pokemonType } from './types';

class Pokemon extends React.Component {
  render() {
    const {
      pokemon,
      favoritePokemon,
      favoritePokemons,
      removeFavoritePokemon,
    } = this.props;
    const { name, type, averageWeight, image, id } = pokemon;

    return (
      <div>
        {favoritePokemons.includes(id) ? (
          <div className="pokemon">
            <div>
              <button type="button" onClick={ () => removeFavoritePokemon(id) }>
                Desfavoritar
                <i className="medium material-icons">favorite</i>
              </button>
              <p>{name}</p>
              <p>{type}</p>
              <p>
                {' '}
                {`Average weight: ${averageWeight.value}${averageWeight.measurementUnit}`}
              </p>
              <Link to={ `/pokemon/${id}` }>Mais detalhes</Link>
            </div>
            <img src={ image } alt={ name } />
          </div>
        ) : (
          <div className="pokemon">
            <div>
              <button type="button" onClick={ () => favoritePokemon(id) }>
                Favoritar
                <i className="medium material-icons">favorite_border</i>
              </button>
              <p>{name}</p>
              <p>{type}</p>
              <p>
                {' '}
                {`Average weight: ${averageWeight.value}${averageWeight.measurementUnit}`}
              </p>
              <Link to={ `/pokemon/${id}` }>Mais detalhes</Link>
            </div>
            <img src={ image } alt={ name } />
          </div>
        )}
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
  favoritePokemon: propTypes.func.isRequired,
  favoritePokemons: propTypes.arrayOf(propTypes.number).isRequired,
  removeFavoritePokemon: propTypes.func.isRequired,
};

export default Pokemon;
