import './App.css';
import React, { useState, useEffect } from "react";
import Login from './pages/Login/Login';
import FormCreate from './pages/FormCreate/FormCreate';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {



  useEffect(() => {

  }, [])


  return (
    <Router>
      <div>
        <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link to="/">Login</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/form-create">Form-create</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/form-create">
            <FormCreate />
          </Route>
          <Route path="/">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




