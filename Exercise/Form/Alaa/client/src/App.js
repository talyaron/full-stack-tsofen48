import './App.css';
import React, { useState } from "react";
import Home from './components/HomePage';
import Lottery from './components/Lottery';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

export default function App() {

  const [candidateNames, setCandidateNames] = useState([]);

  return (
    <Router>
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
    </Router>
  );
}




