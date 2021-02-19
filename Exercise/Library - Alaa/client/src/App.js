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

  function toggleClassName(e) {
    if (e.target.tagName.toLowerCase() != 'a') {
      e.target = e.target.parentNode;
    }
    let allTabs = document.querySelectorAll('nav>ul>a');
    allTabs.forEach(tab => tab.classList.remove('active-nav'));
    e.target.classList.add('active-nav');
  }

  return (
    <Router>
      <nav className='all-tabs' >
        <ul onClick={(e) => toggleClassName(e)}>
          <Link className='nav active-nav' to="/">
            <li>
              Book Add
          </li>
          </Link>
          <Link className='nav' to="/BookSearch">
            <li>
              Search Book
            </li>
          </Link>
        </ul>
      </nav>

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




