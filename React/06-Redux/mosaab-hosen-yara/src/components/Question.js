import './Question.css';
import React, {useState, useEffect}from 'react';
import {downOne,upOne,isRightTrue,isRightFalse ,NotCorrect,itsAnCorrect} from './Redux/actions/index'
import Answer from './Answer'
import {useSelector , useDispatch} from 'react-redux';

function Question(props) {
  
    const score = useSelector(state => state.score)
    const isCorrect = useSelector(state => state.isCorrect)
    const dispatch = useDispatch();

    return (
        <div  className={`q-component`}>
            <div className="question-text">
                {props.innerText}
            </div>
            <div className="all-answers">
                {props.answers.map((answer, index) => {
                    return (
                        <Answer
                            innerText={answer.innerText}
                            rightAnswer={answer.rightAnswer}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Question;