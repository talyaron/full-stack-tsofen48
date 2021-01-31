import React from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Card({ item, totall }) {
  return (
    <div>
      <h1>{totall}$</h1>
      <img src={item} alt="" />
      <Ic
    </div>
  );
}

export default Card;
