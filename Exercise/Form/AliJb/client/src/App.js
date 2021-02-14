import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

import Lottery from "./components/Lottery";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import API from "./api";

export default function App() {
  // register is false login is true
  const [registerOrLogin, setRegisterOrLogin] = useState(false);
  const [alreadyRegisted, setAlreadyRegisted] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  function handleSignUp(e) {
    e.preventDefault();

    const username = e.target.children.name.value;
    const password = e.target.children.password.value;

    axios
      .post("/register-user", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log(response);
          setAlreadyRegisted(!response.data.ok);

          if (response.data.ok) {
            setRegisterOrLogin(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function handleLogin(e) {
    e.preventDefault();
    const username = e.target.children.name.value;
    const password = e.target.children.password.value;

    axios
      .post("/login-user", {
        username,
        password,
      })
      .then(
        (response) => {
          console.log(response.data.ok);

          if (response.data.ok) {
            setLoginSuccess(true);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  function FormsPageButton(params) {
    let history = useHistory();

    function handleClick() {
      history.push("/FormsPage");
    }

    return (
      <button type="button" onClick={handleClick}>
        Go to Forms
      </button>
    );
  }

  function FormsPage() {
    return (
      <div>
        <h1>hi</h1>
      </div>
    );
  }

  function Login() {
    return (
      <div>
        {registerOrLogin === false ? (
          <div>
            <h1>SignUp</h1>
            <form onSubmit={handleSignUp}>
              <input type="text" placeholder="user name" name="name"></input>
              <input type="text" placeholder="password" name="password"></input>
              <input type="submit" placeholder="su"></input>
            </form>
          </div>
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="user name" name="name"></input>
              <input type="text" placeholder="password" name="password"></input>
              <input type="submit" placeholder="su"></input>

              <div>{loginSuccess ? <FormsPageButton /> : <div></div>}</div>
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
          <Route path="/FormsPage">
            <FormsPage />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
