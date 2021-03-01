import './App.css';
import GreetingForm from './components/GreetingForm';
import RandomGreeting from './components/RandomGreeting';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  function toggleClassName(e) {
    if (e.target.tagName.toLowerCase() !== 'a') {
      e.target = e.target.parentNode;
    }
    let allTabs = document.querySelectorAll('nav>ul>a');
    allTabs.forEach(tab => tab.classList.remove('active-nav'));
    e.target.classList.add('active-nav');
  }

  return (
    <Router>
      <nav className='all-tabs' >
        <ul onClick={toggleClassName}>
          <Link className='nav active-nav' to="/">
            <li>
              Greeting Form
          </li>
          </Link>
          <Link className='nav' to="/random-greeting">
            <li>
              Get Random Greeting
            </li>
          </Link>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/random-greeting">
          <RandomGreeting />
        </Route>
        <Route path="/">
          <GreetingForm />
        </Route>
      </Switch>
    </Router>
  );
}




