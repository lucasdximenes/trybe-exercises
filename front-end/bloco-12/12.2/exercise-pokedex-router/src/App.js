import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import PokemonDetails from './components/PokemonDetails';
import About from './components/About';
import NotFound from './components/NotFound';
import FavoritePokemons from './components/FavoritePokemons';

function App() {
  return (
    <div className="App">
      <h1> Pokedex </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About pokedex</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite pokemons</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route
          exact
          path="/"
          render={ (props) => <Pokedex { ...props } pokemons={ pokemons } /> }
        />
        <Route
          exact
          path="/pokemon/:id"
          render={ (props) => <PokemonDetails { ...props } pokemons={ pokemons } /> }
        />
        <Route exact path="/about" component={ About } />
        <Route
          exact
          path="/favorite"
          render={ (props) => (
            <FavoritePokemons { ...props } pokemons={ pokemons } />
          ) }
        />
        <Route exact path="/404" component={ NotFound } />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
