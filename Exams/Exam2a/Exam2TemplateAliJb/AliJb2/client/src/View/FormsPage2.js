import React from "react";
import QuestionForm from "../components/QuestionForm";

export function FormsPage2(submitForm, questions, submitQuestionsToServer) {
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Add question" name="question"></input>
        <input type="submit" placeholder="su"></input>
      </form>

      <div>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <p key={index}>{question.id}</p>

              <QuestionForm info={question} />
            </div>
          );
        })}
      </div>

      <button onClick={submitQuestionsToServer}>Submit Questions</button>
    </div>
  );
}
