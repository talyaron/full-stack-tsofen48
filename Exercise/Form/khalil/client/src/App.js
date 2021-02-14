import './App.css';
import React, { useState, useEffect } from "react";
import QuestionsAdd from "./components/QuestionsAdd"
import Home from "./components/Home"
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
        <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link to="/">Login</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/questions">Questions</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/questions">
            <QuestionsAdd />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




