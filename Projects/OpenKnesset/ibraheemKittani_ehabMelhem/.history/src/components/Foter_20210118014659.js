import React from "react";
import "./Foter.css";
import footer from "./Images/footer.PNG";
function Foter() {
  return (
    <div className="foter">
      <div className="first">
        <h5>ועדות</h5>
        <h5 className="middle">חכ"ים וסיעות</h5>
        <h5>דף הבית</h5>
      </div>
      <div className="second">
        <img src={footer} alt="" />
      </div>
    </div>
  );
}

export default Foter;
