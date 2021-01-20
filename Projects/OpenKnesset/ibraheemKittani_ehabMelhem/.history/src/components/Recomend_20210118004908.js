import React from "react";
import "./Recomend.css";
import Subject from "./Subject";
function Recomend() {
  return (
    <div className="recomnde">
      <Subject text="הגש הצעה" />
      <div className="recomend__info">
        <div className="reomnde__FirstHalf">
          <select id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="vw">VW</option>
            <option value="audi" selected>
              Audi
            </option>
          </select>
        </div>
        <div className="reomnde__SecindHalf"></div>
      </div>
    </div>
  );
}

export default Recomend;
