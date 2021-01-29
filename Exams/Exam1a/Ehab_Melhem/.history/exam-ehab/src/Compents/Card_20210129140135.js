import React from "react";
import "./Card.css";
function Card({ item, totall }) {
  return (
    <div>
      <h1>{totall}$</h1>
      <img src={item} alt="" />
    </div>
  );
}

export default Card;
