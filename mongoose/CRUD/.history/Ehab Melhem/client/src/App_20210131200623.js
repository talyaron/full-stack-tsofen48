import "./App.css";
import React, { useEffect, useState } from "react";

//import components

function App() {
  const [age, setAge] = useState(0);
  const [src, setSrc] = useState("");
  useEffect(() => {
    console.log("stam");
  }, []);
  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.children.name.value;
    e.target.children.name.value = "";

    fetch("/send-kitten-name", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, src, age }),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    setSrc("");
    setAge(0);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="kitten name" name="name"></input>
        <input
          onChange={(e) => {
            setAge(e.target.value);
          }}
          type="number"
          placeholder="kitten age"
          name="age"
        ></input>
        <input
          onChange={(e) => {
            setSrc(e.target.value);
          }}
          type="text"
          placeholder="kitten img"
          name="img"
        ></input>
      </form>
    </div>
  );
}

export default App;
