import React from "react";
import "./Info.css";
function Info(totall) {
  return (
    <div className="info">
      <h1>total sum availble {totall}</h1>
      <button>Buy more</button>
    </div>
  );
}

export default Info;
