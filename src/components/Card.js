import React from 'react';

const Card = props => {
  return (
    <div className='img-container'>
      <img src={props.image} onClick={props.play}/>
    </div>
  );
};

export default Card;