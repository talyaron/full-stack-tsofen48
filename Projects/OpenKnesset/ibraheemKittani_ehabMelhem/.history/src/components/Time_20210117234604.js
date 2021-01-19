import React from "react";

function Time({ text, data }) {
  return (
    <div className="time">
      {data.map((elm) => (
        <p>{elm.date}</p>
        <h5></h5>
      ))}
    </div>
  );
}

export default Time;
