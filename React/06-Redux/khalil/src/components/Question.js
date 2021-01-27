import './Question.css';
import React, {useState, useEffect}from 'react';

import Answer from './Answer'

function Question(props) {
    // const {score, setScore} = props.appState;

    const[isCorrect, setIsCorrect] = useState(0);
    const [isAnsweCorrect, setIsAnsweCorrect] = useState('question--neutral')

    useEffect(()=>{
        if(isCorrect===1){ setIsAnsweCorrect('question--true')}
        else if(isCorrect===-1){setIsAnsweCorrect('question--false')}
    },[isCorrect])

    return (
        <div className={`q-component ${isAnsweCorrect}`}>
            <div className="question-text">
                {props.innerText}
            </div>
            <div className="all-answers">
                {props.answers.map((answer, index) => {
                    return (
                        <Answer
                            innerText={answer.innerText}
                            rightAnswer={answer.rightAnswer}
                            key={index}
                            // appState={{score, setScore}}
                            isAnswerCorrect={{isCorrect, setIsCorrect}}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Question;