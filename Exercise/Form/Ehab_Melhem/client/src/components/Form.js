import { json } from "body-parser";
import React, { useState } from "react";
import "./Form.css";
import Question from "./Question";
function Form() {
  const [question, setQuestion] = useState("");
  const [counter, setCounter] = useState(0);
  const [all, setAll] = useState([]);

  const add_handler = (e) => {
    setAll([...all, { question: question, id: counter }]);
    setCounter(counter + 1);
    setQuestion("");
  };
  const submit_handler = async (e) => {
    e.preventDefault();
    // /add-forms
    await fetch("/user/add-forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ all: all }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div>
      <form>
        <input
          value={question}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          placeholder="insert question"
          type="text"
        />
        <input
          disabled={!question}
          onClick={add_handler}
          value="add"
          type="button"
        />
        <button onClick={submit_handler} type="submit" disabled={!all[0]}>
          create form
        </button>
      </form>
      {all.map((elm, index) => (
        <Question
          question={elm.question}
          id={elm.id}
          all={all}
          setAll={setAll}
        />
      ))}
    </div>
  );
}

export default Form;
