import './App.css';
//import React, { useState, useEffect } from "react";
import Home from './components/HomePage';
import Questions from './components/Questions';

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
        <nav >
          <ul>
            <li >
              <Link to="/">login</Link>
            </li>
            <li>
              <Link to="/about">Questions</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Questions">
            <Questions/>
          </Route>
          <Route path="/">

            <Home  />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




