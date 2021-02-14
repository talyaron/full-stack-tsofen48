import React, { useState, useEffect } from "react";

const FormCreate = () => {
    const [all, setAll] = useState([]);

    function handleQues(e) {
        e.preventDefault();
        let { question } = e.target.children;
        question = question.value;
        setAll([...all, { question: question }])
        console.log(all)

    }

    function handleDB(e) {
        e.preventDefault();
        console.log(all)
        fetch("/questions/add", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ all })
        }).then(r => r.json())
            .then(data => { console.log(data) })
    }

    return (
        <div>
            <form onSubmit={handleQues}>
                <input name='question' type='text' placeholder='question' />
                <button type='submit'>Add</button>
                {all.map((elm) => (
                    <div>
                        <h3>
                            {elm.question} 
                        </h3>
                    </div>
                ))}
            </form>

            <button onClick={handleDB}>Submit form</button>
        </div>
    )
}

export default FormCreate
