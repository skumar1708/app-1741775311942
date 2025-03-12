import React from 'react';

function Header({ player1, player2 }) {
  return (
    <header className="header">
      <h1>Tic-Tac-Toe</h1>
      <p>{player1} vs {player2}</p>
    </header>
  );
}

export default Header;