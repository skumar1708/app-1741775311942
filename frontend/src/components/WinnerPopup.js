import React from 'react';

function WinnerPopup({ winner, onClose }) {
  return (
    <div className="winner-popup">
      <p>Congratulations {winner}!</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default WinnerPopup;