import "./Answer.css";
import React, { useState } from "react";
import { addScore } from "../redux/action";

function Answer(props) {
  const { score, setScore } = props.appState;
  const { setIsCorrect } = props.isAnswerCorrect;

  const dispatch = useDispatch();
  const state = useSelector((state) => state.score.score);
  const [isRight, setIsRight] = useState("answer--neutral");
  const handleClick = (e) => {
    if (props.rightAnswer === true) {
      setIsRight("isRight--true");
      setScore(score + 1);
      setIsCorrect(1);
      dispatch(addScore(state + 1));
    } else {
      setIsRight("isRight--false");
      setScore(score - 1);
      setIsCorrect(-1);
    }
  };
  return (
    <button className={`answer ${isRight}`} onClick={handleClick}>
      {props.innerText}
    </button>
  );
}

export default Answer;
