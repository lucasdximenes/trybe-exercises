import React from "react";
import PropTypes from "prop-types";
import GameCell from "./GameCell";
import "./GameBoard.css";

const GameBoard = ({ gameState, updateGame }) => (
  <div className="game-board">
    {gameState.map((playerId, i) => (
      <GameCell
        id={i}
        key={i}
        onClick={() => updateGame(i)}
        content={playerId}
      />
    ))}
  </div>
);

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number),
  updateGame: PropTypes.func,
};

export default GameBoard;
