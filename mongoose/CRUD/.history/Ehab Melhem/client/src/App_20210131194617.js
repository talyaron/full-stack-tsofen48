import "./App.css";
import React from "react";

//import components

function App() {
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
        <input type="text" placeholder="kitten name" name="name"></input>
        <input type="text" placeholder="kitten name" name="name"></input>
      </form>
    </div>
  );
}

export default App;
