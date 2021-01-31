import React, { useState } from "react";
import "./Card.css";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
function Card({
  setCart,
  cart,
  total_forall,
  buy,
  card_id,
  setTotall,
  item,
  totall,
}) {
  const [isBuy, setIsbuy] = useState(buy);
  const [allTot, setAlltot] = useState(totall);
  const clickHandler = (e) => {
      if(total_forall-)
    setIsbuy(true);
    setTotall(total_forall - allTot);
    fetch(`/update-buy?amount=${totall}&id=${card_id}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="card">
      <h3>{allTot}$</h3>
      <img src={item} alt="" />
      <IconButton onClick={clickHandler} disabled={isBuy} color="primary">
        <AddIcon />
      </IconButton>
    </div>
  );
}

export default Card;
