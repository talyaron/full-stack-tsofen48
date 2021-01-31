import "./App.css";
import React, { useEffect, useState } from "react";
import CatCard from "./components/CatCard/CatCard";

//import components

function App() {
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    fetch("/get-kittens")
      .then((r) => r.json())
      .then((data) => setKittens(data.kittens));
  }, []);

  function handleFilter(e) {
    const filter = e.target.children.filter.value;

    fetch("/get-kitten-filter", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filter }),
    })
      .then((r) => r.json())
      .then((data) => setKittens(data.kittens));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.children.name.value;
    const age = e.target.children.age.value;
    const imgSrc = e.target.children.imgSrc.value;
    e.target.children.name.value = "";
    fetch("/send-kitten-name", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, age: age, imgSrc: imgSrc }),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="kitten name" name="name"></input>
        <input type="text" placeholder="kitten age" name="age"></input>
        <input type="text" placeholder="kitten image" name="imgSrc"></input>
        <input type="submit" placeholder="su"></input>
      </form>

      <form onSubmit={handleFilter}>
        <input
          type="text"
          placeholder="search for Kitty name , age"
          name="filter"
        ></input>
      </form>
      <div>
        {kittens.map((kitten, index) => {
          return (
            <div key={index}>
              <p key={index}>{kitten.name}</p>
              <CatCard info={kitten} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
