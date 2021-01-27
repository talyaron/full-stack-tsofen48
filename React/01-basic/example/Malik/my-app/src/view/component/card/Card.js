import React from 'react'
import './Card'

function card(props) {
    return (
        <div className ='card'>
            {props.title}
        </div>
    )
}

export default card
