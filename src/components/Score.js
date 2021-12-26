import React from 'react';

const Score = props => {
  return (
    <div className="scoreboard">
    <p>
      <span>score:</span>
      <span className="scoreboard-num">{props.score}</span>
    </p>
    <p>
      <span>best score:</span>
      <span className="scoreboard-num">{props.bestScore}</span>
    </p>
  </div>
  );
};

export default Score;