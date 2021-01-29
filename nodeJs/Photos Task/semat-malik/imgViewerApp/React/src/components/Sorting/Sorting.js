import './Sorting.css'
import React from 'react'
import ReactDOM from 'react-dom'

function Sorting(props) {
    return (
        <div className='listSortedImg'>
            <div className="tile box">
                <img src={props.imageUrl} />
            </div>
            <div className="score box">
                <h1 className='circle'>{props.imgScore}</h1>
            </div>
        </div>
    )
}

export default Sorting