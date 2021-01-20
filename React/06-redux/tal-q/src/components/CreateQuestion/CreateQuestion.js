import React from 'react';
import { useDispatch } from 'react-redux';


import { addQuestion } from '../../redux/questions/actions'
import questions from '../../redux/questions/reducers';

const CreateQuestion = () => {
    const dispatch = useDispatch();

    function handleCreateQuestion(e) {
        e.preventDefault();

        let form = e.target;
        let question = { question: '', answers: [] };
        console.dir(form)
        for (let i = 0; i < form.length - 1; i++) {


            if (i === 0) {
                question['question'] = form[i].value;
            } else {

                question.answers[i - 1] = {}
                if (i === 1) question.answers[i - 1].correct = true;
                else question.answers[i - 1].correct = false;

                question.answers[i - 1].option = form[i].value;
            }

        }

        console.log(question)
        dispatch(addQuestion(question))
    }


    return (
        <div>

            <form onSubmit={handleCreateQuestion}>
                <input type='text' placeholder='question' />
                <br></br>
                <input type='text' name='correct' placeholder='correct answer' />
                <input type='text' name='wrng1' placeholder='wrong answer' />
                <input type='text' name='wrng2' placeholder='wrong answer' />
                <input type='text' name='wrng3' placeholder='wrong answer' />
                <input type='submit' value='ADD QUESTION' />
            </form>
        </div>
    )

}

export default CreateQuestion;
