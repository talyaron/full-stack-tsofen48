import './Answer.css';
import React, { useState } from 'react';

function Answer(props) {
    // const [score, setScore] = useState(0);
    const handleClick = (e) => {
        if(props.rightAnswer == true){
            // editStyle();
            // setScore(score + 1);
        }
    }
    return (
            <button className="answer" onClick={handleClick}>
                {props.innerText}
            </button> 
    );
}

export default Answer;