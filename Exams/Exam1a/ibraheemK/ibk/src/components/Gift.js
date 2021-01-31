import React from "react";
import "./Gift.css";
function addGift(src, price){
        fetch('/add-Gift', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({ src, price })
        })
            .then(r => r.json());
}

function Gift(props) {
    return (
        
        <div className="gift2">
            <img src={props.src} />
            <p>{props.price}</p>
            <button className='add_button' onClick={addGift(props.src, props.price)}>add</button>
        </div>
    );
}
export default Gift;