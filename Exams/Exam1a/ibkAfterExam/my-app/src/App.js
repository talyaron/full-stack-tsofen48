import './App.css';
import React, { useState, useEffect } from 'react';
import Gift from './components/Gift';

function App() {
  const [gifts, setGifts] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
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
    setHidden(false);
  }

  function pay() {
    return (
      <div>
        <p>pay {100 -totalAmount}</p>
        <button onClick={payFunction}>pay</button>
        <p hidden={hidden2}>total sum available {totalAmount}</p>
        
      </div>
    )
  }

  function payFunction() {
    setHidden2(false);
  }


  return (
    <div>
      <div className="amount-remain">Total amount {totalAmount}$</div>
      {gifts.map((gift, index) => {
        return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
      })}
      <button className="add-to-cart" onClick={handleToCart}>Add To Cart</button>
      {remainedGifts.map((gift, index) => {
        return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
      })}
      <div className="pay" hidden={hidden}>{pay()}</div>
    </div>


  );
};

export default App