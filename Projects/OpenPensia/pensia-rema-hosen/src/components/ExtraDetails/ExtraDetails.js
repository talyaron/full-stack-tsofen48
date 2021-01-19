import React from "react";
import "./ExtraDetails.css";

import Article from "./Article/Article";
export default function ExtraDetails(props) {
  return (
    <div className="extraDetails">
      <div className="moreInfoBtnContainer">
        <button className="moreInfoBtn">יש לך מידע? לחצ/י כאן</button>
      </div>

      <Article />
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  );
}
