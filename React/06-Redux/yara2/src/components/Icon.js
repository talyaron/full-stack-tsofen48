
import './Icon.css';
import React, { useState } from 'react';




function Icon(props) {
    const {score, setScore} = props.appState;
    const [counter, setCounter] = useState(0);
   
    const i=props.price
    const handleClick = e => {
         
        setCounter(counter + 1)
        
        
        setScore(score+i);
        console.log('click', counter)
       

    }
    
    return (
        <div className="icon">
            <button onClick={handleClick}>{props.title} x{counter} {props.price}$</button>
            
        </div>

    );
}
export default Icon
