import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
//components
import Screen from "./components/screen.js";

function App() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch("/get-companies")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        setCompanies(data.companies);
      });
  }, []);

  function loginFunc() {
    fetch("/login/login")
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
    return <div>Ok Login Success</div>;
  }

  // function HomeButton() {
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/About");
  //   }

  //   return (
  //     <button type="button" onClick={handleClick}>
  //       Go home
  //     </button>
  //   );
  // }

  function Home() {
    return (
      <div>
        {loginFunc()}

        <div>
          {companies.map((list, index) => {
            return (
              <Screen
                key={index}
                logo={list.logo}
                name={list.name}
                par={list.par}
              />
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
    <div>
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

          <div>
            <Link to="/about">
              <button type="button">About Screen</button>
            </Link>
            <Link to="/users">
              <button type="button">users Screen</button>
            </Link>
            <Link to="/">
              <button type="button">Home Screen</button>
            </Link>
          </div>

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
