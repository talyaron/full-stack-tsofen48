import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect } from "react";
function Cart(setCart, cart) {
  useEffect(() => {
    fetch("/get-carts").then(r=>r.json()).then((Data));
  }, []);
  return <div className="cart"></div>;
}

export default Cart;
