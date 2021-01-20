import React from "react";
import Subject from "./Subject";
import "./Time.css";
function Time({ text, data }) {
  return (
    <div className="time scroll">
      <Subject text={text} />
      {data.map((elm) => (
        <div className="time__info">
          <h5>{elm.second}</h5>
          <h5>:{elm.first}</h5>
          <p>{elm.date}</p>
        </div>
      ))}
    </div>
  );
}

export default Time;
