import React from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {

  const play = () => {
    console.log('click');
  };

  return (
    <div>
      <header>
        <h1>Memory Card</h1>
        <div className="scoreboard">
          <p>
            <span>score:</span>
            <span className="scoreboard-num">0</span>
          </p>
          <p>
            <span>high score:</span>
            <span className="scoreboard-num">0</span>
          </p>
        </div>
      </header>
      <div className="gameboard">
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
        <Card play={play} />
      </div>
    </div>
  );
};

export default App;
