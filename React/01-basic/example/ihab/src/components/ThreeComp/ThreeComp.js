import './ThreeComp.css'
import React from "react"

function ThreeComp(props) {
    return (
        <div className='ThreeComp'>
        <h1>{props.nameOf}</h1>
        <p>{props.title}</p>
        <img alt="" src={props.img} />
        </div> 
    )
}

export default ThreeComp;

