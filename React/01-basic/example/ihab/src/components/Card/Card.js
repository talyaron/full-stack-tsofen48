import './Card.css'
import React from "react"

function Card(props) {
    return (
        <div classNameName='card'>
           <h1>{props.nameOf}</h1>
        <p>{props.title}</p>
        <img alt="" src={props.img} />
       </div>
    )
}

export default Card

