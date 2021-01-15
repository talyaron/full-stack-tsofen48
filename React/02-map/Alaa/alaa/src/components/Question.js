import './Question.css';
import React from 'react';

import Answer from './Answer';

function Question(props) {
    return (
        <div className="q-component">
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
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Question;