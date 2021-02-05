import './App.css';
import React, { useState, useEffect } from 'react';
import Gift from './components/Gift';
import Cart from './components/Cart';
import Name from './components/Name';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {

  const [gifts, setGifts] = useState([]);
  const [hidden, setHidden] = useState(true);
  const [hidden2, setHidden2] = useState(true);
  
  const [totalAmount, setTotalAmount] = useState(100);

  useEffect(() => {
    fetch('/get-gifts').then(r => r.json()).then(data => {
      console.log(data);
      setGifts(data);
    }
    )
  }, []);



  return (
    
    <Router>
      <div>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/goToLotery">
            <Cart/>
            {/* <Link to="/pay"><button className="add-to-cart">Get random Names</button></Link> */}
          </Route>
          <Route path="/">
            {/* <div className="amount-remain">Total amount {totalAmount}$</div> */}
            {/* {gifts.map((gift, index) => {
              return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
            })} */}
            <Name />
            {/* <Link to="/goToLotery"><button className="add-to-cart">Go To Lotery</button></Link> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}