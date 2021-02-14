import React, { useState, useEffect } from "react";

function QuestionsAdd() {

  const [questions, setQuestions] = useState([]);

//   useEffect(() => {
//     fetch('/send-questions')
//       .then(r => r.json())
//       .then(candidateNames => {
//         console.log(candidateNames)
//         setCandidateNames(candidateNames);
//       });
      
//   }, [])

function addOneQuestion(e) {
    e.preventDefault();
    const q = e.target.question.value;
    setQuestions([...questions, {text: q}]);
    console.log("Current Array: ", questions);
}

function sendQuestions() {
    console.log("sending questions");
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questions: questions })
    };
    fetch('http://localhost:3000/send-questions', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

  return (
    <div>
        <form onSubmit={addOneQuestion}>
            <input type="text" name="question" placeholder="Please enter a question"></input>
            <button type="submit">Add</button>
        </form>
        <div>
            <h1>Questions:</h1>
            {questions.map((question, index) => {
            return (
                <p key={index}>{question.text}</p>
            )
        })}
        <button onClick={sendQuestions}>Send Questions</button>
        </div>
    </div>
  );
}

export default QuestionsAdd;
