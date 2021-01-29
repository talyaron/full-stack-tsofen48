import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Cart( to) {
  const [carts, setCarts] = useState([]);
  const [totall, setTotall] = useState(0);
  useEffect(() => {
    fetch("/get-carts")
      .then((r) => r.json())
      .then((data) => {
        setCarts(data.carts);
        setTotall(data.total);
      });
  }, []);
  return (
    <div className="cart">
      {carts.map((elm) => (
        <Card
          buy={elm.buy}
          card_id={elm.card_id}
          totall={elm.total}
          item={elm.src}
        />
      ))}
      <Link to="/info">
        <button className="btn">pay</button>
      </Link>
    </div>
  );
}

export default Cart;
