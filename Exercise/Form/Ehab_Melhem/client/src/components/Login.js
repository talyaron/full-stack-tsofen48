import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";
function Login() {
  let history = useHistory();

  const [l_name, setLname] = useState("");
  const [l_pass, setLpass] = useState("");
  const [s_name, setSname] = useState("");
  const [s_pass, setSpass] = useState("");
  const [messege, setMessege] = useState("");
  const [loginMessege, setLMessege] = useState("");
  const handel_signup = async (e) => {
    e.preventDefault();
    await fetch("/user/add-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: s_name, pass: s_pass }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.index === 1) {
          setMessege("SignUp success full");
        } else {
          setMessege("SignUp has been faild");
        }
      });
  };
  const handel_login = async (e) => {
    e.preventDefault();
    await fetch("/user/check-user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user: l_name, pass: l_pass }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if (data.index === 1) {
          setLMessege("Login has been success full");
          history.push("/form");
        } else {
          setLMessege("Login has been faild");
        }
      });
  };

  return (
    <div>
      <form>
        <input
          value={l_name}
          onChange={(e) => {
            setLname(e.target.value);
          }}
          placeholder="insert your username "
          type="text"
        />
        <br />
        <input
          onChange={(e) => {
            setLpass(e.target.value);
          }}
          value={l_pass}
          placeholder="insert your password"
          type="password"
        />
        <br />
        <input onClick={handel_login} value="login" type="submit" />
        <h4>{loginMessege}</h4>
      </form>
      <br />
      <form>
        <input
          value={s_name}
          onChange={(e) => {
            setSname(e.target.value);
          }}
          placeholder="insert your username "
          type="text"
        />
        <br />
        <input
          value={s_pass}
          onChange={(e) => {
            setSpass(e.target.value);
          }}
          placeholder="insert your password"
          type="password"
        />
        <br />
        <input onClick={handel_signup} value="SignUp" type="submit" />
        <h4>{messege}</h4>
      </form>
    </div>
  );
}

export default Login;
