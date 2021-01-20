import React from "react";

function Time({ text, data }) {
  return (
    <div className="time">
      {data.map((elm) => (
        <div className="time__info"></div>
      ))}
    </div>
  );
}

export default Time;
