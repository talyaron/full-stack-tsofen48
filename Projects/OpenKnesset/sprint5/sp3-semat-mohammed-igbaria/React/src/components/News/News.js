import './News.css'
import React from 'react'
import ReactDOM from 'react-dom'

function News(props) {



    return (
        <div className='News'>
        <h5>{props.newsTitle}</h5>
        <p>{props.newsText}</p>
         <a href={props.newsUrl}>צפייה בכתבה</a>
         <hr class="new1"></hr>

        </div>
    )
}

export default News