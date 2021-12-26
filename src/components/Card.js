import React from 'react';

const Card = props => {
  return (
    <div className='img-container'>
      <img src={props.image} onClick={props.onCardClick}/>
    </div>
  );
};

export default Card;