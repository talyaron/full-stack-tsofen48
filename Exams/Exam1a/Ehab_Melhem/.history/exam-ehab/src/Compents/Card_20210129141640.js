import React, { useState } from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Card({ buy, card_id, setTotall, item, totall }) {
  const [isBuy, setIsbuy] = useState(isBuy);
  return (
    <div className="card">
      <h3>{totall}$</h3>
      <img src={item} alt="" />
      <IconButton disabled={isBuy} color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Card;
