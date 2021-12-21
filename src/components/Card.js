import React from 'react';
import ahri from '../images/AhriSquare.jpg';

const Card = props => {
  return (
    <div className='img-container'>
      <img src={ahri} onClick={props.play}/>
    </div>
  );
};

export default Card;