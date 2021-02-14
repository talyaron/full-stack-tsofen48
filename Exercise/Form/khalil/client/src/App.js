import './App.css';
import React, { useState } from "react";
import QuestionsAdd from "./components/QuestionsAdd"

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

export default function App() {

  const [loginSuccess, setLoginSuccess] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  // useEffect(() => {
  //   fetch('/get-candidates')
  //     .then(r => r.json())
  //     .then(candidateNames => {
  //       console.log(candidateNames)
  //       setCandidateNames(candidateNames);
  //     });

  // }, [])

  async function handleLoginButton(e) {
    e.preventDefault();
    console.log('Handling Login!');
    const user = e.target.username.value;
    const pass = e.target.password.value;
    console.log('Username: ', user, ', Password: ', pass);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: user, password: pass})
    };

    // fetch('http://localhost:3000/login', requestOptions)
    //   .then(response => response.json())
    //   .then(data => {console.log("/login response: ", data); setLoginSuccess(data.message) });

    const response = await fetch('http://localhost:3000/login', requestOptions);
    const data = await response.json();
    console.log("/login response: ", data);
    setLoginSuccess(data.message);

    if(loginSuccess === true) {
        alert("Login Successful!")
      } else {
        alert("Login Failed!")
      }
  }

  async function handleSignupButton(e) {
    e.preventDefault();
    console.log('Handling Registration!');

    const user = e.target.username.value;
    const pass = e.target.password.value;
    console.log('Username: ', user, ', Password: ', pass);

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: user, password: pass})
    };

    // const response = await fetch('http://localhost:3000/signup', requestOptions)
    //   .then(response => response.json())
    //   .then(data => {console.log("/signup response: ", data); setSignUpSuccess(data.message)});
    const response = await fetch('http://localhost:3000/signup', requestOptions);
    const data = await response.json();
    console.log("/signup response: ", data);
    setSignUpSuccess(data.message)

    if(signUpSuccess === true) {
      alert("Registration Successful!")
    } else {
      alert("User already exists! Registration Failed")
    }
  }

  return (
    <div>
      <form onSubmit={handleLoginButton}>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
      <form onSubmit={handleSignupButton}>
        <input type="text" name="username" placeholder="Username"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Signup</button>
      </form>
      <QuestionsAdd></QuestionsAdd>
    </div>
  );
}




