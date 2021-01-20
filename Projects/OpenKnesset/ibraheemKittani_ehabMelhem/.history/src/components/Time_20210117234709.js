import React from "react";

function Time({ text, data }) {
  return (
    <div className="time">
      {data.map((elm) => (
        <div className="time__info">
          <p>{elm.date}</p>
          <h5>{elm.first}</h5>
        </div>
      ))}
    </div>
  );
}

export default Time;
