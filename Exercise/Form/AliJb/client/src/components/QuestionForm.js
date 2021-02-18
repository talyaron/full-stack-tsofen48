import React from "react";

function QuestionForm(props) {
  const data = props.info;
  return (
    <div>
      <p>{data}</p>
    </div>
  );
}

export default QuestionForm;
