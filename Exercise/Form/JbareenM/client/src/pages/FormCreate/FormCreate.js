import React, { useState } from 'react';


import './FormCreate.css'

//components
import InputQuestion from './InputQuestion';


const FormCreate = () => {

    const [questions, setQuestions] = useState([]);

    function updateQuestion(text, index) {
       
        const tempQuestions = [...questions]
        console.log(tempQuestions)
        tempQuestions[index] = text;
        setQuestions(tempQuestions);
        console.log(tempQuestions)
    }
    function addQuestion() {
        setQuestions([...questions, ''])
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('/questions/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ questions })
        })
            .then(r => r.json())
            .then(data => {
                console.log(data);

            })
    }

    return (
        <div>
            <h1>Questions</h1>
            <button onClick={addQuestion} >Add Question</button>
            <form className='formCreate'>
                {questions.map((question, index) => {
                    return <InputQuestion key={index} index={index} updateQuestion={updateQuestion} />
                })}
                <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default FormCreate
