import React from "react";
import "./Information.css";

function Information({ withNum, without }) {
  return (
    <div className="information">
      <div className="information__data info__top">
        <h1>{withNum}%</h1>
        <p>בעד</p>
      </div>
      <div className="information__data info__middle info__top">
        <h1>20%</h1>
        <p>נגד</p>
      </div>
    </div>
  );
}

export default Information;
