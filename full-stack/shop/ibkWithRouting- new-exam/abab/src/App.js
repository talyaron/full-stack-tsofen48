import './App.css';
import React, { useState, useEffect } from 'react';
// import Gift from './components/Gift';
// import Cart from './components/Cart';
import Login from './components/Login';
import Book from './components/Book';
import SearchBook from './components/SearchBook';
import FormBuilder from './components/FormBuilder';
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

  // useEffect(() => {
  //   fetch('/get-gifts').then(r => r.json()).then(data => {
  //     console.log(data);
  //     setGifts(data);
  //   }
  //   )
  // }, []);



  return (
    
    <Router>
      <div>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          {/* <Route path="/goToSearch"> */}
            {/* <p id="sum_available">total sum available {totalAmount}</p> */}
            {/* <Link to="/"><button className="add-to-cart">Buy More</button></Link> */}
          {/* </Route> */}
          <Route path="/goToSearch">
          <Link to="/"><button className="search-book">Go To First Page</button></Link>
          <SearchBook />
            {/* <Cart amount={{ totalAmount, setTotalAmount }}/>
            <Link to="/pay"><button className="add-to-cart">Pay</button></Link> */}
          </Route>
          <Route path="/">
            {/* <div className="amount-remain">Total amount {totalAmount}$</div>
            {gifts.map((gift, index) => {
              return <Gift src={gift.src} price={gift.price} number={gift.number} amount={{ totalAmount, setTotalAmount }} />
            })} */}
            {/* <Link to="/goToCart"><button className="add-to-cart">Go To Cart</button></Link> */}
            {/* <Login /> */}
            <Link to="/goToSearch"><button className="search-book">Go To Search Greeting</button></Link>
            <Book />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}