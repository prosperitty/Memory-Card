import React from 'react';
import Card from './components/Card';
import './App.css';
import ahri from './images/ahri-card.jpg';
import evelynn from './images/evelynn-card.jpg';
import fiora from './images/fiora-card.jpg';
import irelia from './images/irelia-card.jpg';
import missFortune from './images/missfortune-card.jpg';
import pantheon from './images/pantheon-card.jpg';
import samira from './images/samira-card.jpg';
import sylas from './images/sylas-card.jpg';
import syndra from './images/syndra-card.jpg';
import twistedFate from './images/twistedfate-card.jpg';
import volibear from './images/volibear-card.jpg';
import xayah from './images/xayah-card.jpg';
import yasuo from './images/yasuo-card.jpg';
import yone from './images/yone-card.jpg';

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
        <Card play={play} image={ahri} />
        <Card play={play} image={evelynn} />
        <Card play={play} image={fiora} />
        <Card play={play} image={irelia} />
        <Card play={play} image={missFortune} />
        <Card play={play} image={pantheon} />
        <Card play={play} image={samira} />
        <Card play={play} image={sylas} />
        <Card play={play} image={syndra} />
        <Card play={play} image={twistedFate} />
        <Card play={play} image={volibear} />
        <Card play={play} image={xayah} />
        <Card play={play} image={yasuo} />
        <Card play={play} image={yone} />
      </div>
    </div>
  );
};

export default App;
