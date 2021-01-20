import React from "react";

function Time({ text, data }) {
  return (
    <div className="time">
      {data.map((elm) => (
        <div className="time__info">
          <p>{elm.data}</p>
          <h5></h5>
        </div>
      ))}
    </div>
  );
}

export default Time;
