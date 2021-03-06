import React, { useState } from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Card({ total_forall, buy, card_id, setTotall, item, totall }) {
  const [isBuy, setIsbuy] = useState(buy);
  const [allTot, setAlltot] = useState(totall);
  const clickHandler = (e) => {
    setIsbuy(true);
    setAlltot(total_forall - allTot);
    fetch(`/update-buy?amount=${totall}`)
  };
  return (
    <div className="card">
      <h3>{allTot}$</h3>
      <img src={item} alt="" />
      <IconButton disabled={isBuy} color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Card;
