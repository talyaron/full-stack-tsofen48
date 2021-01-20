import './Answer.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import {increaseCounter,decreaseCounter} from '../redux/counter/action'

function Answer(props) {
    const dispatch = useDispatch();
    const { innerText, rightAnswer } = props
    const [isRight, setIsRight] = useState('answer--neutral');

    function handleClick() {
        console.log(rightAnswer)
        if (rightAnswer) {
            setIsRight('isRight--true');
           dispatch( increaseCounter());

        } else {
            setIsRight('isRight--false');
            dispatch( decreaseCounter())
        }
    }

    return (
        <button className={`answer ${isRight}`} onClick={handleClick}>
            {innerText}
        </button>
    );

}

export default Answer;