import './gift.css';
import React, { useState } from 'react';
function gift(props) {
    const [counter, setCounter] = useState(0);
    const {totlprice, setprice} = props.appState;
    const i=props.price;
    const totalprice = e => {
         
        
        if(counter<1){
            setCounter(counter + 1)
            setprice(totlprice-i);
            useEffect(() => {
                fetch("/totalprice", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({i}),
                  });
         console.log('click', counter)
        }
         }else{}
    }
    return (
        <div className="flex-container">
           <div> {props.price}$</div>
           <img src="https://t3.ftcdn.net/jpg/01/57/34/36/360_F_157343659_AAoqxJk3YhUtOasJ2XQsOpmhkE5p5gz5.jpg"/>
            <div><button onClick={totalprice}>Add</button></div>
        </div>
    );
}
export default gift;