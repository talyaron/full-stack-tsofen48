import './Answer.css';
import React from 'react';
// import { useDispatch } from 'react-redux';

function Answer(props) {

    // const handleClick = (e) => {
    //     if(props.rightAnswer === true){
    //         setIsRight('isRight--true');
    //         setScore(score + 1);
    //         setIsCorrect(1);
    //     } else{
    //         setIsRight('isRight--false');
    //         setScore(score -1)
    //         setIsCorrect(-1)
    //     }
    // }
    return (
            <button className="answer">
                {props.innerText}
            </button> 
    );

}

export default Answer;