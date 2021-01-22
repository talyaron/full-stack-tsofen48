import React from 'react'
import './eachBarStyle.css'
export default function EachBar(props){
    return (
        <li id="LiInList" /*onClick={#GoToNextPage}*/>
            <img alt="icon" id="iconBar" src={props.imageSource} />
            <div key="tittleBar" id="tittleBar">{props.tittle}</div><br/>
            <small id="smallText">{props.description}</small> 
           <img alt={`Arrow${props.index}`} /*onClick={#GoToNextPage}*/ id="arrow" src="https://i.ibb.co/RNp1gKf/arrow-removebg-preview-removebg-preview.png"/>
        </li>
    )
}

/*

 <a href="#">
<img id="arrow" src="https://o.remove.bg/downloads/acc0d77b-3a01-4e82-8d35-9dd026149242/arrow-removebg-preview.png"/>
</a>

 */