import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>404</h1>
        <p>Page not found.</p>
        <img
          src="https://www.fatosdesconhecidos.com.br/wp-content/uploads/2019/03/6saddestpokemonmoments-21280jpg-d63e69_1280w.jpg"
          alt="Pokemon triste"
          style={ { width: 300 } }
        />
      </div>
    );
  }
}
