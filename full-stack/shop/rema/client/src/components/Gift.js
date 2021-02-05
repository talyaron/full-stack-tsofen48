import React, { useState, useEffect } from 'react';
import './Gift.css';


export default function Gift(props){
    const {total, setTotal} = props.total;

       const handleSubmit =  e => { 
        e.preventDefault();
        const id = e.target.children.giftID.value;
     
        fetch("/post_cost", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }),
          })
          
          fetch('/get-user-money')
          .then(r => r.json())
          .then(data => {
              console.log(data.user.money);
            setTotal(data.user.money);
           });
    }


    return (<> 
        <form onSubmit={handleSubmit} className='gift_container'>
            <input name='giftID' className='giftID' value={props.giftID}></input>
            <input name='cost' type='text' id='cost' className='cost' value={props.cost}></input>
           <img className='gift_icon' src={props.img} ></img> 
           <button>Add</button>
        </form></>
    );
}
