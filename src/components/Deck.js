import React from 'react';
import Card from './Card';

const Deck = props => {
  const deck = props.deck;
  const cards = deck.map((image) => 
    <Card onCardClick={props.play} image={image.src} key={image.id.toString()}/>
  );
  return (
    <div className='gameboard'>{cards}</div>
  );
};

export default Deck;