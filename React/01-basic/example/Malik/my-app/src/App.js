import React from "react";


//component 
import Card from './view/component/card/Card';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

export default function App() {
  return (
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
              <Link to="/users/mainuser">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users/:uid">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (<div>

<h2>Home</h2>
  <Card/> 
    </div>
  )
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  const {uid} = useParams();
  return <h2>User with id: {uid}</h2>;
}