import React from "react";
import "./Recomend.css";
import Subject from "./Subject";
import attach from "./Images/attach.PNG";
function Recomend() {
  return (
    <div className="recomnde">
      <Subject text="הגש הצעה" />
      <div className="recomend__info">
        <div className="reomnde__FirstHalf">
          <h4>חכ"ים רלוונטיים: </h4>
          <select className="select">
            <option>גפני משה</option>
            <option>גרמל יעל</option>
            <option>דיין עוזי</option>
            <option>דיכנטר אבי</option>
          </select>
        </div>
        <div className="reomnde__SecindHalf"></div>
      </div>
    </div>
  );
}

export default Recomend;
