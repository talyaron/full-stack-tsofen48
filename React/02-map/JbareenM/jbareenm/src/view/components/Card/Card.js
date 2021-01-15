import './Card.css'
import React, { useState } from 'react';


function Card(props) {


    const [counter, setCounter] = useState(0)

    const handleClick =  e => {
        const newCounter = counter + 1;
        setCounter(newCounter)
        console.log('click', newCounter)
    }


    return (
        <div className='card'>
            <img src={props.img} alt='flowers' />
            {props.title}
            <button onClick={handleClick}>Add</button>
            <h2>clicked: {counter}</h2>
        </div>
    )
}

export default Card

