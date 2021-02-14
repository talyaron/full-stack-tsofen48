import React, { useState } from "react";
function Questions() {
  const [Question, setQuestion] = useState();
  const [Questions, setQuestions] = useState([]);
  function AddQuestion() {
    document.getElementById("question").value="";
   
    // Questions.push(Question)
    setQuestions([...Questions, Question]);
  }
  function addToData(){
    fetch("/AddQuestions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ questions:Questions }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        // setnewQuestion(data);
      });
  }
  return <div className='body lottery'>
    {Questions.map((q, index) => {
      return (
        <p key={index}>
          {q}
        </p>
      );
    })}
    <input id="question" type="text" onChange={(e) => {
      setQuestion(e.target.value);
    }}></input>
    <button onClick={AddQuestion}>Add</button>
    <div>
      <button onClick={addToData}>Form submit</button>
    </div>
  </div>;
}

export default Questions;