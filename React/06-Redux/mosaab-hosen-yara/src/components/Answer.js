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
           // console.log(e.id)
            dispatch(NotCorrect())
            dispatch(upOne())
            dispatch(isRightTrue())
           // document.getElementById(e.id).style.backgroundColor="red"
        } 
        else{
           dispatch(itsAnCorrect());
           dispatch(downOne());
           dispatch(isRightFalse())
           //console.log(e.id)
        }
    }
    return (
        <div name={`${props.key}`} className={`${isRight}`}> 
            <button id={`${props.index}`} className={`answer`}  onClick={handleClick}>
                {props.innerText}
            </button> 
            </div>
    );

}

export default Answer;