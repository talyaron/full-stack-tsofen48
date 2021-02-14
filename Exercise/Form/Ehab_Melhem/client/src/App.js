import "./App.css";
import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Form from "./components/Form";

export default function App() {
  useEffect(async () => {
    await fetch("/user/users")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <Router>
      <div>
        <div className="container">
          <Switch>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
