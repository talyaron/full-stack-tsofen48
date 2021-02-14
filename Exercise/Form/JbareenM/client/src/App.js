import "./App.css";
import React, { useEffect, useState } from "react";

//import components

function App() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const [userDB, setUserDB] = useState("");
  const [passDB, setPassDB] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    console.log("stam");
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.children.name.value;
    e.target.children.name.value = "";

    fetch(`/get-user?userName=${userName}`)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        if(data.Users.length !== 0){
            setName(userName);
        }else{
          setName("you are not a user!");
        }
      });

  }
  const handleRegister = (e) => {

      fetch("/send-user", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userDB, passDB }),
      })
        .then((r) => r.json())
        .then((data) => {
          console.log(data);
        });
  };
  
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          type="text"
          placeholder="username"
          name="name"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="password"
          name="pass"
        ></input>
        <button type="submit">login</button>
      </form>
      <form onSubmit={handleRegister}>
      <input
          onChange={(e) => {
            setUserDB(e.target.value);
          }}
          type="text"
          placeholder="username"
          name="name"
        ></input>
        <input
          onChange={(e) => {
            setPassDB(e.target.value);
          }}
          type="password"
          placeholder="password"
          name="pass"
        ></input>
      <button type="submit">register</button>
      </form>
      
      
      <a>{name}</a>


    </div>
  );
}

export default App;
