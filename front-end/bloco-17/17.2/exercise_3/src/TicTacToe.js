import React, { useState } from "react";
import GameBoard from "./GameBoard";

const TicTacToe = () => {
  const [activePlayer, setActivePlayer] = useState(1);
  const [gameBoard, setGameBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const victoryArchivedInLine = (gameBoard) => {
    for (let i = 0; i <= 6; i += 3) {
      if (
        gameBoard[i] === gameBoard[i + 1] &&
        gameBoard[i + 1] === gameBoard[i + 2] &&
        gameBoard[i] !== 0
      )
        return gameBoard[i];
    }
    return false;
  };

  const victoryArchivedInColumn = (gameBoard) => {
    for (let i = 0; i <= 2; i += 1) {
      if (
        gameBoard[i] === gameBoard[i + 3] &&
        gameBoard[i + 3] === gameBoard[i + 6] &&
        gameBoard[i] !== 0
      )
        return gameBoard[i];
    }
    return false;
  };

  const victoryArchivedInDiagonals = (gameBoard) => {
    if (gameBoard[4] === 0) return false;
    if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
      return gameBoard[0];
    }
    if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
      return gameBoard[2];
    }
    return false;
  };

  const resetGame = () => {
    setActivePlayer(1);
    setGameBoard([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  };

  const updateState = (cellClicked) => {
    setGameBoard((state) => {
      const newState = [...state];

      if (state[cellClicked] === 0) {
        newState[cellClicked] = activePlayer;
      } else newState[cellClicked] = state[cellClicked];

      return newState;
    });
    setActivePlayer((state) => {
      if (state === 1) return 2;
      return 1;
    });
  };

  const victoryArchieved = () => {
    return (
      victoryArchivedInLine(gameBoard) ||
      victoryArchivedInColumn(gameBoard) ||
      victoryArchivedInDiagonals(gameBoard)
    );
  };

  const renderButton = () => {
    return (
      <button type="button" onClick={resetGame} data-testid="restart-button">
        Recomeçar Jogo
      </button>
    );
  };

  const win = victoryArchieved();

  if (!gameBoard.includes(0) && !win) {
    return (
      <>
        {renderButton()}
        <h1>Empate</h1>
      </>
    );
  }

  return (
    <>
      {renderButton()}
      {!win ? (
        <GameBoard gameState={gameBoard} updateGame={updateState} />
      ) : (
        <h1>{`Player ${win === 2 ? "O" : "X"} Ganhou`}</h1>
      )}
    </>
  );
};

export default TicTacToe;
