import './Cart.css'
import Gift from "./Gift";
import React, { useEffect, useState } from 'react';



function Cart(props) {

    //const { totalAmount, setTotalAmount } = props.amount;
    const [aa, setAa] = useState([]);
    const [bb, setBb] = useState([]);
    // useEffect(() => {
    //     fetch('/get-name').then(r => r.json()).then(data => {
    //         console.log('sdfdsfdsfdsfdsfdsf'+data);
    //         //setRemainedGifts(data);
    //     }
    //     )
    // }, []);


    function addName(){
        fetch('/get-name').then(r => r.json()).then(data => {
            console.log(data);
            //setRemainedGifts(data);
            setAa(data[0].name);
            setBb(data[1].name);
            console.log(data)
        })
    }

    return (
        <div className="cart_items">
            <button onClick={addName}> Get random Names </button>
            <div>{aa}</div> 
            <div>{bb}</div> 
        </div>
        
    );


}

export default Cart;