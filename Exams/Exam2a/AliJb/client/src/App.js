import "./App.css";
import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard/UserCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { Button } from "bootstrap";

function App() {
  const [counter, setCounter] = useState(1);
  const [users, setusers] = useState([]);
  const [winners, setWinners] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.children.name.value;
    setCounter(counter + 1);
    e.target.children.name.value = "";

    setusers([...users, { name, counter }]);
  }

  function LotteryButton() {
    let history = useHistory();

    function handleClick() {
      fetch("/send-users", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(users),
      })
        .then((r) => r.json())
        .then((data) => console.log(data));
      history.push("/Lottery");
    }

    return (
      <button type="button" onClick={handleClick}>
        Go Lottery
      </button>
    );
  }

  function Home() {
    return (
      <div>
        <div>{users.length >= 5 ? <LotteryButton /> : <div></div>}</div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="user name" name="name"></input>
          <input type="submit" placeholder="su"></input>
        </form>

        <div>
          {users.map((user, index) => {
            return (
              <div key={index}>
                <p key={index}>{user.name}</p>
                <UserCard info={user} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  function handleSubmitLottery(e) {
    e.preventDefault();

    getWinnersFromDb();
  }

  function getWinnersFromDb() {
    fetch("/get-winners")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setWinners(data.winners);
      });
  }

  function Lottery() {
    return (
      <div>
        <h2>Lottery Page</h2>
        <form onSubmit={handleSubmitLottery}>
          <input type="submit" placeholder="su"></input>
        </form>

        <div>
          <h1>Winners ! </h1>
          {winners.map((user, index) => {
            return (
              <div key={index}>
                <p key={index}>{user.name}</p>
                <UserCard info={user} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div>
        <Router>
          <div>
            {/* <div>
              <Link to="/lottery">
                <button type="button">Lottery Screen</button>
              </Link>
              <Link to="/">
                <button type="button">Main Screen</button>
              </Link>
            </div> */}

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/lottery">
                <Lottery />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
