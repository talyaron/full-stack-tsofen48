import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  function toggleClassName(e) {
    if (e.target.tagName.toLowerCase() != 'a') {
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
              Page 1
          </li>
          </Link>
          <Link className='nav' to="/page2">
            <li>
              Page 2
            </li>
          </Link>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/page2">
          <h1>page2</h1>
        </Route>
        <Route path="/">
          <h1>page1</h1>
        </Route>
      </Switch>
    </Router>
  );
}




