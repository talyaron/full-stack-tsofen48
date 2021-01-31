import "./App.css";
import React, { useEffect, useState } from "react";

//import components

function App() {
  const [input, setInput] = useState("");
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
      body: JSON.stringify({ name }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="kitten name" name="name"></input>
        <input type="number" placeholder="kitten age" name="age"></input>
        <input type="text" placeholder="kitten img" name="img"></input>
        <button>By id</button>
        <button>By Name</button>
      </form>
    </div>
  );
}

export default App;
