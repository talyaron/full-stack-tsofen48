import "./App.css";
import React, { useEffect, useState } from "react";
import CatCard from "./components/CatCard/CatCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//import components
function App() {
  const [kittens, setKittens] = useState([]);

  useEffect(() => {
    fetch("/getKitty")
      .then((r) => r.json())
      .then((data) => setKittens(data.kittens));
  }, []);

  function handleFilter(e) {
    e.preventDefault();
    const filter = e.target.children.filter.value;
    if (filter !== "") {
      fetch("/get-kitten-filter", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ filter }),
      })
        .then((r) => r.json())
        .then((data) => setKittens(data.kittens));
    } else {
      fetch("/get-kittens")
        .then((r) => r.json())
        .then((data) => setKittens(data.kittens));
    }
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

  function Home() {
    return (
      <div>
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

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }

  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
