import React from "react";
import "./Information.css";

function Information() {
  return (
    <div className="information">
      <div className="information__data info__top">
        <h1>80%</h1>
        <p>בעד</p>
      </div>
      <div className="information__data info__middle info__top">
        <h1>20%</h1>
      </div>
    </div>
  );
}

export default Information;
