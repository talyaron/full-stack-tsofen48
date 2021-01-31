import logo from './logo.svg';
import './App.css';
import Gift from "./view/components/Gift/Gift"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Balance from './view/components/Balance/Balance';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
  useHistory
} from "react-router-dom";
import ButtonRouter from './view/components/ButtonRouter/ButtonRouter';
import { useState } from 'react';




const data = [
  {
    id : "1",
    name:"Ps4",
    img:"",
    desc:"ps4",
    price : "25",
    added : false
  },
  {
    id : "2",
    name:"Xbox",
    img:"",
    desc:"Xbox",
    price : "25",
    added : false
  },
  {
    id : "3",
    name:"Wii",
    img:"",
    desc:"Wii",
    price : "25",
    added : false

  },
  {
    id : "4",
    name:"Nitendo",
    img:"",
    desc:"Nitendo",
    price : "25",
    added : false
  },
  ]

const balance= 100;

function App() {

  const [localdata,setlocalData] = useState("");

  return (
    <Router>
      
      <div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/Success">
            <Success />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function Main() {
  
  return (    
  <div className="App">
  <header className="App-header">
  <Balance info={balance}/> 
  {data.map(item=>
 
  <div>
  <Gift info={item} />
  <Button variant="primary"  onClick={(item)=>{item.added=true}}>Add me</Button>
  </div>

  )}
  <ButtonRouter info="Checkout" />
  </header>
</div>
)
}




function Checkout() {
  return (<div className="App">
      <header className="App-header">
      <Balance info={balance }/> 
      {data.filter( item=> item.added ).map(item=> <Gift info={item} />)}
      <ButtonRouter info="Checkout" />
      </header>
    </div>)
}

function Success() {
  return <h2>Success</h2>;
}

export default App;
