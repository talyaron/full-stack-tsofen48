import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ExtraDetails from "./components/ExtraDetails/ExtraDetails";
import Details from "./components/Details/Details";
import AddArticle from "./components/AddArticle/AddArticle";
import AddDirector from "./components/AddDirector/AddDirector";

export default function App() {
  let setPressed = (e) => {
    if (document.getElementById("pressed-a")) {
      document.getElementById("pressed-a").id = "";
    }
    e.target.id = "pressed-a";
  };
  return (
    <div className="container">
      <div className="header">
        <div className="imgContainer">
          <img
            className="profileImg"
            src="https://photof8.com/wp-content/uploads/2016/10/FutureAst007-2.jpg"
          ></img>
          <h3>עיסאווי פריג</h3>
        </div>
      </div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link onClick={setPressed} to="/details">
                  סיכום פרטים
                </Link>
              </li>
              <li>
                <Link onClick={setPressed} to="/extra-details">
                  עוד מידע
                </Link>
              </li>
              <li>
                <Link onClick={setPressed} to="/vote">
                  ניתוני הצבעה
                </Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/extra-details">
              <ExtraDetails />
            </Route>
            <Route path="/vote">
              <Vote />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/add-article">
              <AddArticle></AddArticle>
            </Route>
            <Route path="/add-director">
              <AddDirector></AddDirector>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Vote() {
  return <h2></h2>;
}
