import React, { useState } from 'react';
import Header from '../components/Header';
import Board from '../components/Board';
import ResetButton from '../components/ResetButton';
import WinnerPopup from '../components/WinnerPopup';
import FlowerEffect from '../components/FlowerEffect';

function GamePage() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [player1, setPlayer1] = useState('Player 1');
  const [player2, setPlayer2] = useState('Player 2');

  const handleClick = (i) => {
    const squaresCopy = [...squares];
    if (winner || squaresCopy[i]) return;
    squaresCopy[i] = xIsNext ? 'X' : '@';
    setSquares(squaresCopy);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(squaresCopy);
    if (winner) {
      setWinner(winner);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    setWinner(null);
  };

  const closePopup = () => {
    setWinner(null);
  };

  return (
    <div>
      <Header player1={player1} player2={player2} />
      <Board squares={squares} onClick={handleClick} />
      <ResetButton onClick={resetGame} />
      {winner && <WinnerPopup winner={winner} onClose={closePopup} />}
      {winner && <FlowerEffect />}
    </div>
  );
}

export default GamePage;