import './Cart.css'
import Gift from "./Gift";
import React, { useEffect, useState } from 'react';



function Cart(props) {

    const { totalAmount, setTotalAmount } = props.amount;
    const [remainedGifts, setRemainedGifts] = useState([]);

    useEffect(() => {
        fetch('/get-gifts').then(r => r.json()).then(data => {
            console.log(data);
            setRemainedGifts(data);
        }
        )
    }, []);
    return (
        <div className="cart_items">
            <p>you have in court cart {remainedGifts.length} items</p>
            {remainedGifts.map((gift, index) => {
                return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
            })}
            <p>Pay {100 - totalAmount}</p>
        </div>
    );


    // return (
    //     <div className="cart">
    //       {carts.map((elm) => (
    //         <Card
    //           buy={elm.buy}
    //           card_id={elm.card_id}
    //           totall={elm.total}
    //           item={elm.src}
    //         />
    //       ))}
    //       <Link to="/info">
    //         <button className="btn">pay</button>
    //       </Link>
    //     </div>
    //   );

}

export default Cart;