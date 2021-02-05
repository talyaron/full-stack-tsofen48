import './Gift.css'
import React, { useState } from 'react';
let addCounter=[];

function Gift(props) {
    const {totalAmount, setTotalAmount} = props.amount;
    console.log(props.totalAmount);
    
    function addHandler() {
        if(addCounter.includes(parseInt(props.number))){
            alert('you added the gift already');
        }
        else{
        fetch('/add-gift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(props)
        })
            .then(r => r.json()).then(data => {
                console.log(data);
                addCounter.push(data);
                console.log(addCounter);
            })
            setTotalAmount(totalAmount-(props.price));
        }
    }

    return (
        <div class="container-gifts">
            <p>{props.price}$</p>
            <img src={props.src} alt="" />

            {<button class="add-button" onClick={addHandler}>add</button>}
        </div>
    )

}

export default Gift;