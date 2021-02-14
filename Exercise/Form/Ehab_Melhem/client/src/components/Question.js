import React, { useState } from "react";
import "./Question.css";
function Question({ question, id, all, setAll }) {
  const delete_handler = () => {
    setAll(
      all.filter((elm) => {
        return elm.id !== id;
      })
    );
  };
  return (
    <div className="question">
      <input
        value={question}
        onChange={(e) => {
          let newArray = [...all];
          newArray.forEach((element) => {
            if (element.id === id) {
              element.question = e.target.value;
            }
          });
          setAll(newArray);
          console.log(all);
        }}
        type="text"
      />
      <button onClick={delete_handler}>Delete</button>
    </div>
  );
}

export default Question;
