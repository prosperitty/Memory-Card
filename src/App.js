import React, { useEffect, useState } from 'react';
import Score from './components/Score';
import Deck from './components/Deck';
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
  const [deck, setDeck] = useState([
    { id: 1, src: ahri, isChosen: false },
    { id: 2, src: evelynn, isChosen: false },
    { id: 3, src: fiora, isChosen: false },
    { id: 4, src: irelia, isChosen: false },
    { id: 5, src: missFortune, isChosen: false },
    { id: 6, src: pantheon, isChosen: false },
    { id: 7, src: samira, isChosen: false },
    { id: 8, src: sylas, isChosen: false },
    { id: 9, src: syndra, isChosen: false },
    { id: 10, src: twistedFate, isChosen: false },
    { id: 11, src: volibear, isChosen: false },
    { id: 12, src: xayah, isChosen: false },
    { id: 13, src: yasuo, isChosen: false },
    { id: 14, src: yone, isChosen: false },
  ]);

  const [score, setScore] = useState(0);
  useEffect(() => {
    document.score = `score: ${score}`;

    console.log('score did mount and update');
    console.log(document.score);
  }, [score]);

  const [bestScore, setBestScore] = useState(0);
  useEffect(() => {
    document.bestScore = `best score: ${bestScore}`;

    console.log('best score did mount and update');
    console.log(document.bestScore);
  }, [bestScore]);

  const incrementScore = () => {
    if (score < deck.length) {
      return setScore(score + 1);
    } else if (score === deck.length) {
      return 'gameover';
    }
  };

  const play = (e) => {
    const targetImage = e.target.attributes[0].value;
    shuffle();
    deck.forEach((card, i) => {
      if (card.src === targetImage) {
        if (card.isChosen) {
          setBestScore((prevBest) => {
            if (prevBest >= score) {
              return prevBest;
            } else if (prevBest < score) {
              return score;
            } 
          });
          setScore(0);
          return setDeck([
            { id: 1, src: ahri, isChosen: false },
            { id: 2, src: evelynn, isChosen: false },
            { id: 3, src: fiora, isChosen: false },
            { id: 4, src: irelia, isChosen: false },
            { id: 5, src: missFortune, isChosen: false },
            { id: 6, src: pantheon, isChosen: false },
            { id: 7, src: samira, isChosen: false },
            { id: 8, src: sylas, isChosen: false },
            { id: 9, src: syndra, isChosen: false },
            { id: 10, src: twistedFate, isChosen: false },
            { id: 11, src: volibear, isChosen: false },
            { id: 12, src: xayah, isChosen: false },
            { id: 13, src: yasuo, isChosen: false },
            { id: 14, src: yone, isChosen: false },
          ]);
        
        } else if (!card.isChosen) {
          incrementScore();
          return deck[i].isChosen = true;
          // console.log(e.target.attributes[0].value);
        } 
      }
    });
  };

  const shuffle = () => {
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = deck[i];
      deck[i] = deck[j];
      deck[j] = temp;
    }
  };

  return (
    <div>
      <header>
        <h1>Memory Card</h1>
        <Score score={score} bestScore={bestScore} />
      </header>
      <Deck play={play} deck={deck} />
    </div>
  );
};

export default App;
