/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';
import xImage from './x.png';
import oImage from './o.svg';

class GameCell extends React.Component {
  render() {
    const { id, content, onClick } = this.props;
    const lockedCell = 3;

    return (
      <div
        key={ id }
        data-testid={ `cell_${id}` }
        className="game-cell"
        onClick={ () => onClick(id) }
      >
        {content === 0 || content === lockedCell ? null : content === 1 ? (
          <img src={ xImage } alt="X" />
        ) : (
          <img src={ oImage } alt="O" />
        )}
      </div>
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  content: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default GameCell;
