import './Answer.css';
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/modules/count/actions";

function Answer(props) {

    // const {score, setScore} = props.appState;
    //const count = useSelector(state => state.count.counter);
    const dispatch = useDispatch();

    const { setIsCorrect} = props.isAnswerCorrect;
    

    const [isRight, setIsRight] = useState('answer--neutral');
    const handleClick = (e) => {
        if(props.rightAnswer === true){
            setIsRight('isRight--true');
            dispatch(increment(1));
            setIsCorrect(1);
        } else{
            setIsRight('isRight--false');
            dispatch(decrement(1));
            setIsCorrect(-1)
        }
    }
    return (
            <button className={`answer ${isRight}`} onClick={handleClick}>
                {props.innerText}
            </button>     
    );

}

export default Answer;