import React from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";

function Card({ item, totall }) {
  return (
    <div>
      <h1>{totall}$</h1>
      <img src={item} alt="" />
    </div>
  );
}

export default Card;
