import React from "react";
import Card from "./Card";
import "./Cart.css";
import { useEffect } from "react";
function Cart(setCart, cart) {
  useEffect(() => {
    fetch("/get-carts");
  }, []);
  return <div className="cart"></div>;
}

export default Cart;
