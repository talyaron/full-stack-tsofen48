import './App.css';
import React, { useState, useEffect } from 'react';
//components
import Screen from './components/gift';

function App() {
  const [totlprice]=useState()
  const [gifts, setgifts] = useState([]);
 
  useEffect(() => {
    fetch('/get-gifts')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setgifts(data);
      })
  }, [])

  useEffect(() => {
    fetch('/get-price')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setprice(data);
      })
  }, [])

  return (
    <div className="App">
       <div className="price">total sum avaliable:{totlprice}$</div>
        <div>
        {gifts.map((list, index) => {
          return (<Screen
            key={index}
            price={list.price}
          />)


        })}

      </div>

      <button className="cart">Go to cart</button>

    </div>
     



  
    
  );
}

export default App;
