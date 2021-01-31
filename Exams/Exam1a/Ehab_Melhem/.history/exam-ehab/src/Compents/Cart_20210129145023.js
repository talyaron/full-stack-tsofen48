import React from "react";
import Card from "./Card";
import "./Cart.css";
function Cart(setCart, cart) {
  return (
    <div className="cart">
      {cart.map((elm) => (
        <Card car />
      ))}
    </div>
  );
}

export default Cart;
