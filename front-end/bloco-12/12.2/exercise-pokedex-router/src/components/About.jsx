import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <div>
        <h1>What is pokedex</h1>
        <p>
          A pokedex is a digital collection of information about Pokémon, a
          video-game series created and published by Nintendo.
        </p>
        <p>
          The Pokémon franchise is a video game series created by Nintendo that
          centers on the fictional Pokémon creatures. The series was originally
          published in Japan in 1996, and was later published in North America
          in 1999.
        </p>
        <img
          src="https://archives.bulbagarden.net/media/upload/3/36/479Rotom-Pok%C3%A9dex.png"
          alt="pokedex"
          style={ { width: 300 } }
        />
      </div>
    );
  }
}
