import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect, useState } from "react";
function Cart() {
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
        <h1>${}</h1>
      {carts.map((elm) => (
        <Card
          buy={elm.buy}
          card_id={elm.card_id}
          totall={elm.total}
          item={elm.src}
        />
      ))}
      <button className="btn">pay</button>
    </div>
  );
}

export default Cart;
