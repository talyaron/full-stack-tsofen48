import './App.css';
import React, { useState, useEffect } from "react";
import Home from './components/HomePage';
import Lottery from './components/Lottery';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  const [candidateNames, setCandidateNames] = useState([]);

  useEffect(() => {
    fetch('/get-candidates')
      .then(r => r.json())
      .then(candidateNames => {
        console.log(candidateNames)
        setCandidateNames(candidateNames);
      });
      
  }, [])


  return (
    <Router>
      <div>
        <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link to="/">Add Candidate</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/about">Lottery</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/lottery">
            <Lottery />
          </Route>
          <Route path="/">

            <Home candidateNames={candidateNames} setCandidateNames={setCandidateNames} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




