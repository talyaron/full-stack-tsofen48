import React from 'react'
import './Card.css';


const Card = (props) => {

  const { img, name, meta, desc } = props;

  return (
    <div className='card'>
      <img src={img} alt='img' />
      <p>{name}</p>
    </div>)
}

export default Card
