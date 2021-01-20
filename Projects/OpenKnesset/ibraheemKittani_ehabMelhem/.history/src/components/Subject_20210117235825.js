import React from "react";
import "./Subject.css";
function Subject({ Icon, text }) {
  return (
    <div className="subject">
      <div className="subject__text">
        <h4>{text}</h4>
      </div>
      <div className="subject__logo">
        <img src={Icon} alt="" />
        <h1>asdasdasd</h1>
      </div>
    </div>
  );
}

export default Subject;
