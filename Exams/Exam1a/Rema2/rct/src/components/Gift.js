import React from 'react'
import "./gift.css";
import {useState,useEffect} from "react";

function checkCost(e) {
    e.preventDefault();
    let cost =  document.getElementById("cost").innerHTML;
    let userMoney =  document.getElementById("money").innerHTML;
     userMoney = userMoney - cost;
    console.log(userMoney);

        fetch('/sentMoney', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({userMoney})
        }).then(r => r.json())
            .then(data => {
                console.log(data)
                return data;
            })
  
    
}

function Gift(props) {


    return (
        <form onSubmit={checkCost} className="gift_container">
            <h1 id="money">{props.UserMoney}</h1>
            <h2 id="cost">{props.cost}$</h2>
            <img src={props.img}></img>
            <button type="submit" className="addToCart">Add</button>
        </form>
    )
}

export default Gift
