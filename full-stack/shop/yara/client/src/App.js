//import './App.css';
//import React, { useState, useEffect } from 'react';

//components
//import Screen from './components/screen.js';


/*
function App() {
  

  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/get-companies')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCompanies(data.companies);
      })
  }, [])

  return (
    
 //   <div></div>

    
    
      <div >
        
        {companies.map((list, index) => {
          return (<Screen
            key={index}
            logo={list.logo}
            name={list.name}
            par={list.par}
          />)


        })}

    </div>



    


  );
  
}

export default App;
*/
import './App.css';
import Screen from './components/screen.js';
import React, { useState, useEffect } from 'react';
//import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  

  return (
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
  );
}

function Home() {
  
  return (<h2>Home</h2>
    );
}

function About() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/get-companies')
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setCompanies(data.companies);
      })
  }, [])
  return (<div >
        
    {companies.map((list, index) => {
      return (<Screen
        key={index}
        logo={list.logo}
        name={list.name}
        par={list.par}
      />)


    })}

</div>);
}

function Users() {
  return <h2>Users</h2>;
}