import './App.css';
import Gifts from './components/Gifts';
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from "react-router-dom";



function App() {
  const totalUserSum = 100;
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    fetch('/gifts')
      .then(r => r.json())
      .then(data => {
        console.log(data + '@@@@@@@@@@@@@@@@@@@@@@@@')
        setGifts(data);
      })
  }, []);

  function goToCart(){
    return <Redirect  to="/cart" />;
  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/review">
            <button className='buy-more-btn'> BUY MORE </button>
          </Route>
          <Route path="/cart">
            <button className='pay-btn'> PAY </button>
          </Route>
          <Route path="/">
            <div className='content'>
              <h4> Total sum to use: {totalUserSum} $</h4>
              <Gifts gifts={gifts} />

              <button className='go-to-cart-btn' onClick={goToCart()}>Go To Cart</button>
            </div>
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
