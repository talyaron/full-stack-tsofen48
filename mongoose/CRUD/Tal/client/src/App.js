import './App.css';
import React, { useState, useEffect } from 'react';


//import components
import Header from './components/header/header';
import Row from './components/rows/row';


function App() {

  const [amount, setAmount] = useState(0);
  const [gift, setGift] = useState([]);

  useEffect(() => {
    fetch('/giftAmount')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setAmount(data.amount)
        setGift(data.gift)
      })
  }, [])

  return (
    <div className="App">
      <Header Amount={amount} />
      <div className="Content">
        {gift.map((row, index) => {
          return (<Row price={row.price} imgSrc={row.imgSrc} key={row.id} id={row.id} />)
        })}
      </div>

      <footer>
        <button>
          add to cart
      </button>
      </footer>
    </div>
  );
}

export default App;
