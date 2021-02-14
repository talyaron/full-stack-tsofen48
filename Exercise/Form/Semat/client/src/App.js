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
import e from 'express';

export default function App() {

  // const [candidateNames, setCandidateNames] = useState([]);

  // useEffect(() => {
  //   fetch('/get-candidates')
  //     .then(r => r.json())
  //     .then(candidateNames => {
  //       console.log(candidateNames)
  //       setCandidateNames(candidateNames);
  //     });
      
  // }, [])
//////////////////////////////////////////////
// Home
function Home() {
  return <div className="homePage"><h2>Home</h2>
  <div className="logIn">
  <form onSubmit={handleSubmit}>
  <input
            type="text"
            name="username"
            value={values.username}
            className="form-control"
            placeholder="Username"
          />
  <input
            type="password"
            name="password"
            value={values.password}
            className="form-control"
            placeholder="Password"
          />
    <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            ></button>

  </form>
  </div>

  <div className="signUp">
  <form onSubmit={handleSubmit}>
  <input
            type="text"
            name="username"
            value={values.username}
            className="form-control"
            placeholder="Username"
          />
  <input
            type="password"
            name="password"
            value={values.password}
            className="form-control"
            placeholder="Password"
          />
    <button
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            ></button>

  </form>
  </div>
  </div>;
}
function handleSubmit(e){
  e.preventDefault();
}
/////////////////////////////////////////////
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



function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

