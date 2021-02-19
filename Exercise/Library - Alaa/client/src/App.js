import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import BookSearch from './components/BookSearch';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      {/* <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link to="/">Book Add</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/form-create">Search Book</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/BookSearch">
            <BookSearch />
          </Route>
          <Route path="/">
            <Form />
          </Route>
        </Switch>
    </Router>
  );
}




