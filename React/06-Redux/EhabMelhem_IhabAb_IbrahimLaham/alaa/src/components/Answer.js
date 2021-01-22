<<<<<<< Updated upstream
import "./Answer.css";
import React, { useState } from "react";
import { addScore } from "../redux/action";
import { useSelector, useDispatch } from "react-redux";

function Answer(props) {
  const { score, setScore } = props.appState;
  const { setIsCorrect } = props.isAnswerCorrect;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.score.score);
  const [isRight, setIsRight] = useState("answer--neutral");
  const handleClick = (e) => {
    if (props.rightAnswer === true) {
      setIsRight("isRight--true");
      setIsCorrect(1);
      dispatch(addScore(+1));
    } else {
      setIsRight("isRight--false");
      setIsCorrect(-1);
      dispatch(addScore(-1));
    }
  };
  return (
    <button className={`answer ${isRight}`} onClick={handleClick}>
      {props.innerText}
    </button>
  );
}

export default Answer;
=======
import './Answer.css';
import React, { useState } from 'react';

function Answer(props) {

    const {score, setScore} = props.appState;
    const { setIsCorrect} = props.isAnswerCorrect

    const [isRight, setIsRight] = useState('answer--neutral');
    const handleClick = (e) => {
        if(props.rightAnswer === true){
            setIsRight('isRight--true');
            setScore(score + 1);
            setIsCorrect(1);
        } else{
            setIsRight('isRight--false');
            setScore(score -1)
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
>>>>>>> Stashed changes
