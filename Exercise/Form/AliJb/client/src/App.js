import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Lottery from "./components/Lottery";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import API from "./api";

export default function App() {
  // register is false login is true
  const [registerOrLogin, setRegisterOrLogin] = useState(false);
  const [alreadyRegisted, setAlreadyRegisted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const username = e.target.children.name.value;
    const password = e.target.children.password.value;
    // console.log(username);
    // console.log(password);

    // axios({
    //   method: "post",
    //   url: "/register-user",
    //   data: {
    //     username,
    //     password,
    //   },
    // });

    // axios.post("/register-user", {
    //   username,
    //   password,
    // });

    axios
      .post("/register-user", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log(response.data);
          setAlreadyRegisted(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function Home() {
    return (
      <div>
        {registerOrLogin === false ? (
          <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="user name" name="name"></input>
              <input type="text" placeholder="password" name="password"></input>
              <input type="submit" placeholder="su"></input>
            </form>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="user name" name="name"></input>
              <input type="text" placeholder="password" name="password"></input>
              <input type="submit" placeholder="su"></input>
            </form>
          </div>
        )}
        {alreadyRegisted === false ? null : <h1>User already Registed</h1>}
      </div>
    );
  }

  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/formsPage">
            <Lottery />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
