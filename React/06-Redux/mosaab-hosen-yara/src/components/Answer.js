import './Answer.css';
import React from 'react';
import {useSelector , useDispatch} from 'react-redux';
import {downOne,upOne,isRightTrue,isRightFalse ,NotCorrect,itsAnCorrect} from './Redux/actions/index'


function Answer(props) {

    const isRight = useSelector(state => state.isRight)
    const dispatch = useDispatch();

   // const {score, setScore} = props.appState;
   // const { setIsCorrect} = props.isAnswerCorrect
    //const [isRight, setIsRight] = useState('answer--neutral');
   

    const handleClick = (e) => {
        if(props.rightAnswer === true){
            dispatch(NotCorrect())
            dispatch(upOne())
            dispatch(isRightTrue())
        } 
        else{
           dispatch(itsAnCorrect());
           dispatch(downOne());
           dispatch(isRightFalse())
        }
    }
    return (
            <button className={`answer ${isRight}`} onClick={handleClick}>
                {props.innerText}
            </button> 
    );

}

export default Answer;