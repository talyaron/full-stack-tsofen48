import "./App.css";
import React, { useEffect, useState } from "react";

//import components

function App() {
  const [all, setAll] = useState([]);
  const [age, setAge] = useState(0);
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");

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
  }
  const ByAge = (e) => {
    fetch(`/get-kittens-age?age=${age}`)
      .then((r) => r.json())
      .then((data) => setAll(data.kittens));
  };
  const ByName = (e) => {
    fetch(`/get-kittens?name=${name}`)
      .then((r) => r.json())
      .then((data) => setAll(data.kittens));
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          placeholder="kitten name"
          name="name"
        ></input>
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
        <button type="submit">submit</button>
      </form>
      <button onClick={ByAge}>ByAGE</button>
      <button onClick={ByName}>ByName</button>
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
