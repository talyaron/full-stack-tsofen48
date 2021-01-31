import React from "react";
import "./Cart.css";
function Cart(
  item,
  totall,
  setCart,
  cart,
  total_forall,
  isBuy,
  card_id,
  setTotall
) {
  return (
    <div className="cart">
     {
         cart.map(elm=>(
             <Card
         ))
     }
    </div>
  );
}

export default Cart;
