import React from "react";
import "./Recomend.css";
import Subject from "./Subject";
function Recomend() {
  return (
    <div className="recomnde">
      <Subject text="הגש הצעה" />
      <div className="recomend__info">
        <div className="reomnde__FirstHalf">
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
