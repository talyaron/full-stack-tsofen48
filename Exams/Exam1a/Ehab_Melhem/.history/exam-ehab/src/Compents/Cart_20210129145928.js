import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect, useState } from "react";
function Cart(setCart, cart) {
  const [carts, setCarts] = useState([]);
  useEffect(() => {
    fetch("/get-carts")
      .then((r) => r.json())
      .then((data) => {});
  }, []);
  return <div className="cart"></div>;
}

export default Cart;
