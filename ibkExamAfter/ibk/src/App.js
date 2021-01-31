import './App.css';
import React, { useState, useEffect } from 'react';
import Gift from './components/Gift';

function App() {
  const [gifts, setGifts] = useState([]);
  const [remainedGifts, setRemainedGifts] = useState([]);
  const [totalAmount, setTotalAmount] = useState(100);
  useEffect(() => {
    fetch('/get-gifts').then(r => r.json()).then(data => {
      console.log(data);
      setGifts(data);
    }
    )
  }, [])

  function handleToCart() {
    
    fetch('/get-gifts').then(r => r.json()).then(data => {
      console.log(data);
      setRemainedGifts(data);
    }
    )
  }

  function pay() {
    return (
    <div><p>total sum available {totalAmount}</p>
            <button>pay</button></div>
      )
  }


  return (
    <div>
      <p>dsfdsfdsfsdf</p>
      <div className="amount-remain">Total amount {totalAmount}$</div>
      {gifts.map((gift, index) => {
        return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
      })}
      <button className="add-to-cart" onClick={handleToCart}>Add To Cart</button>
      {remainedGifts.map((gift, index) => {
        return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
      })}
      <div>{pay()}</div>
      



    </div>


  );
};

export default App