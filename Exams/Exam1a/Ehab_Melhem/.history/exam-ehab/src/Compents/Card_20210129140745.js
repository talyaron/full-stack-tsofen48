import React from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Card({ item, totall }) {
  return (
    <div className="card">
      <h3>{totall}$</h3>
      <img src={item} alt="" />
      <IconButton color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Card;
