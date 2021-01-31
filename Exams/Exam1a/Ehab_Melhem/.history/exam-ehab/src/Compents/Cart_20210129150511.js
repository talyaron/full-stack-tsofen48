import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect, useState } from "react";
function Cart() {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("/get-carts")
      .then((r) => r.json())
      .then((data) => {
        setCarts(data.carts);
      });
  }, []);
  return (
    <div className="cart">
      {carts.map((elm) => (
        <Card card_id={elm.card_id} totall={elm.total} item={elm.src} />
      ))}
    </div>
  );
}

export default Cart;
