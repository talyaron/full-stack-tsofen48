import "./App.css";
import React, { useEffect, useState } from "react";

//import components

function App() {
  const [all, setAll] = useState([]);
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
  const ByAge = (e) => {
    fetch(`/get-kittens-age?age=${age}&`)
      .then((r) => r.json())
      .then((data) => setAll(data.kittens));
  };
  const ByName = (e) => {
    fetch(`/get-kittens-age?age=${age}`)
      .then((r) => r.json())
      .then((data) => setAll(data.kittens));
  };
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
      <button onClick={ByAge}>By id</button>
      <button>By Name</button>

      {all.map((elm) => (
        <div>
          <h3>
            {elm.name} {elm.age}
          </h3>
          <img src={elm.imgSrc} alt="" />
        </div>
      ))}
    </div>
  );
}

export default App;
