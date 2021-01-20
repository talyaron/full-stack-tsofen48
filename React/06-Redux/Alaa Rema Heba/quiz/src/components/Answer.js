import './Answer.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateScore } from '../redux/actions';
function Answer(props) {
    let score=2;
    const dispatch = useDispatch();
    const checkAnswer = (e) => {
        e.preventDefault();
        if(props.rightAnswer === true){
            e.target.id='isRight--true'
            dispatch(updateScore(score));
          
        } else{
            e.target.id='isRight--false'
            dispatch(updateScore(-score));
        }
    }
    return (
            <button id='answer' className="answer" onClick={checkAnswer}>
                {props.innerText}
            </button> 
    );

}

export default Answer;