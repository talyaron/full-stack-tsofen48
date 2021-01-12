import './TwoComp.css'
import React from "react"

function TwoComp(props) {
    return (
        <div className='TwoComp'>
        <h1>{props.nameOf}</h1>
        <p>Add a little style!.</p>
        <img alt="" src={props.img} />
        </div>
    )
}

export default TwoComp

