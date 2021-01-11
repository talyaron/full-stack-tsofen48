import './Card.css'
import React from "react"

function Card(props) {
    return (
        <div className='card'>
            {props.title}
            <img src={props.img} alt='flowers' />
        </div>
    )
}

export default Card

