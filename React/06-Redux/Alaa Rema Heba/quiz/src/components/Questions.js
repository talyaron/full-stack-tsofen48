import './Questions.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Answer from './Answer'

function Question(props) {
    // const {score, setScore} = props.appState;

    // const[isCorrect, setIsCorrect] = useState(0);
    // const [isAnsweCorrect, setIsAnsweCorrect] = useState('question--neutral')

    // useEffect(()=>{
    //     if(isCorrect===1){ setIsAnsweCorrect('question--true')}
    //     else if(isCorrect===-1){setIsAnsweCorrect('question--false')}
    // },[isCorrect])

    const questions = useSelector(state => state.questions.questions);
    // console.log(questions);
    return (
        <div className="questions">
            {questions.map((question, index) => {
                return (<div key={index} className="q-component">
                    <div className="question-text">
                        {question.content.question}
                    </div>
                    <div className="all-answers">
                        {question.content.Answers.map((answer, index) => {
                            return (
                                  <Answer
                                    innerText={answer}
                                    rightAnswer={index === 0 ? true : false}
                                    key={index}
                                />
                             ); 
                         })} 
                    </div>
                </div>

                )
            })}

        </div>
    );
}

export default Question;