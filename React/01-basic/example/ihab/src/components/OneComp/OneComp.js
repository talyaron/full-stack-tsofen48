import './OneComp.css'
import React from "react"

function OneComp(props) {
    return (
        <div className='OneComp'>
           <h1>{props.nameOf}</h1>
        <p>{props.title}</p>
        <img alt="" src={props.img} />
       </div>
    )
}

export default OneComp;

