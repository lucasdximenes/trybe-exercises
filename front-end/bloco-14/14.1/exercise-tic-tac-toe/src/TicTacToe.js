/* eslint-disable no-magic-numbers */
import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlayer: 1, // Jogador 1 e 2
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: 0,
    };
    this.updateGame = this.updateGame.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.lockCells = this.lockCells.bind(this);
  }

  updateGame(id) {
    this.setState(
      (prevState) => {
        const { activePlayer, gameBoard } = prevState;
        const newGameBoard = [...gameBoard];
        newGameBoard[id] = activePlayer;
        return {
          activePlayer: activePlayer === 1 ? 2 : 1,
          gameBoard: newGameBoard,
        };
      },
      () => {
        const winner = this.checkWinner();
        const { gameBoard } = this.state;
        if (winner) {
          this.setState({ winner });
          this.lockCells();
        } else if (!gameBoard.includes(0)) {
          this.setState({ winner: 3 });
        }
      },
    );
  }

  checkWinner() {
    const { gameBoard } = this.state;
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningCombinations.length; i += 1) {
      const [a, b, c] = winningCombinations[i];
      if (
        gameBoard[a]
        && gameBoard[a] === gameBoard[b]
        && gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }
    return 0;
  }

  lockCells() {
    const { gameBoard } = this.state;
    const lockedCells = gameBoard.map((cell) => {
      if (cell === 0) {
        return 3;
      }
      return cell;
    });
    this.setState({ gameBoard: lockedCells });
  }

  restartGame() {
    this.setState({
      activePlayer: 1,
      gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      winner: 0,
    });
  }

  // Antes de começar a realizar o exercício,
  // junte os dois outros exercícios na master (ou seja, mergeie as Pull Requests).
  // Atualize essa branch com o git merge master.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo deve acabar. É necessário passar
  // nos teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados
  // para criar o que se pede.

  render() {
    const { gameBoard, winner } = this.state;
    return (
      <div className="tic-tac-toe">
        <GameBoard gameState={ gameBoard } updateGame={ this.updateGame } />
        <div className="winner">
          {winner === 0 ? null : (
            <div>
              {winner === 1 && <p>Player X Ganhou</p>}
              {winner === 2 && <p>Player O Ganhou</p>}
              {winner === 3 && <p>Empate</p>}
            </div>
          )}
        </div>
        <div>
          <button data-testid="reset" type="button" onClick={ this.restartGame }>
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default TicTacToe;
