
import Gift from "./components/Gift";
import './App.css';
import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default function App() {
  // const [gifts, setGifts] = useState([]);
  // const [giftsInCart, setGiftsInCart] = useState([]);
  // const [total, setTotal] = useState(100);

  // useEffect(() => {
  //   fetch('/get-gifts')
  //     .then(r => r.json())
  //     .then(data => {
  //       console.log(data)
  //       setGifts(data);
  //     });


  // }, [])
  return (<div>
    {/* <div>
  <input type='text' className='total' value={total}></input>
  {gifts.map((gift, index) => {
    return <Gift total={{total,setTotal}} key ={gift.id} cost={gift.cost} img={gift.img} giftID={gift.id}/>
  })}
 
</div>; */}
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div> );
}

function Home() {
  const [gifts, setGifts] = useState([]);
  const [giftsInCart, setGiftsInCart] = useState([]);
  const [total, setTotal] = useState(100);

  useEffect(() => {
    fetch('/get-gifts')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setGifts(data);
      });


  }, [])
  return   <div>
  <input type='text' className='total' value={total}></input>
  {gifts.map((gift, index) => {
    return <Gift total={{total,setTotal}} key ={gift.id} cost={gift.cost} img={gift.img} giftID={gift.id}/>
  })}
 
</div>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}