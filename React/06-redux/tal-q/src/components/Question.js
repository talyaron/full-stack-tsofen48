import './Question.css';
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeQuestion } from '../redux/questions/actions'

import Answer from './Answer'

function Question(props) {
    const { question, answers, id } = props.question;
    const dispatch = useDispatch();

    function handleDelete() {
        console.log('delete', id)
        dispatch(removeQuestion(id))
    }

    return (
        <div className={`q-component`}>
            <div className="question-text">
                {question}
            </div>
            <p>
                <button onClick={handleDelete}>DELETE</button>
            </p>
            <div className="all-answers">
                {answers.map((answer, index) => {
                    return (
                        <Answer
                            innerText={answer.option}
                            rightAnswer={answer.correct}
                            key={index}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default Question;