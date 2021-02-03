
import './vote.css';
import React, { useState } from 'react';


function vote(props) {
    return (
    
        <div className="icon">
            <div className="container">
                
                <span><img className="image" src={props.logo}  /></span>
                <h3>{props.name}</h3>
                <span><img className="dislike" src={props.dislike}/></span>
                <span><img className="like" src={props.like}/></span>
                <span><img className="info" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Infobox_info_icon.svg/1024px-Infobox_info_icon.svg.png"/></span>
                         
            </div>
            

        </div>

    );
}
export default vote
