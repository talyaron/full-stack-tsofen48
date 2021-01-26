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
        <h1>{without}%</h1>
        <p>נגד</p>
      </div>
function Information() {
  return (
    <div className="information">
      <h1>information</h1>
    </div>
  );
}

export default Information;
